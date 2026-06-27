import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { notFound } from "next/navigation";

async function getBlogPostDetail(id) {
  try {
    const res = await fetch(
      `https://selfnote.fdevsite.cloud/api/portfolio-notes/${id}`,
      {
        cache: "no-store", // Selalu ambil data paling segar dari Laravel
      },
    );

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Gagal memuat detail artikel:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getBlogPostDetail(id);
  if (!post || post.status !== "published")
    return { title: "Article Not Found" };

  return {
    title: `${post.title} | Ferdy Kurnia Panggabean`,
    description: post.content.replace(/<[^>]*>/g, "").substring(0, 160),
  };
}

export default async function BlogPostDetailPage({ params }) {
  const { id } = await params;
  const post = await getBlogPostDetail(id);

  if (!post || post.status !== "published") {
    notFound();
  }

  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-blue-600 selection:text-white antialiased">
      <Navbar />

      <main className="px-6 pt-28 pb-20 max-w-4xl mx-auto relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white font-medium mb-10 transition-colors"
        >
          ← Back to Blog
        </Link>

        <header className="mb-10">
          <div className="text-sm font-mono text-zinc-500 mb-4">
            {new Date(post.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Main Cover Image — Menggunakan post.images */}
        {post.images && (
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl mb-12">
            <Image
              src={`https://selfnote.fdevsite.cloud/storage/${post.images}`}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <article
          className="prose prose-invert prose-zinc max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 prose-strong:text-white
            prose-p:leading-relaxed prose-p:text-zinc-300 prose-li:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>

      <Footer />
    </div>
  );
}
