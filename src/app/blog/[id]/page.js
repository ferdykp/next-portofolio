import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getBlogPostDetail(id) {
  try {
    const res = await fetch(
      `https://selfnote.fdevsite.cloud/api/portfolio-notes/${id}`,
      {
        cache: "no-store",
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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)] antialiased">
      <Navbar />

      <main className="px-6 pt-28 pb-20 max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-muted)] hover:text-[var(--accent)] mb-10 transition-colors"
        >
          ← Back to blog
        </Link>

        <header className="mb-10">
          <div className="text-xs font-mono text-[var(--text-muted)] mb-4">
            {new Date(post.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[var(--text)] mb-6 leading-tight">
            {post.title}
          </h1>
        </header>

        {post.images && (
          <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-[var(--border)] mb-12">
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
          className="prose prose-invert max-w-none
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
            prose-a:text-[var(--accent)] prose-strong:text-[var(--text)]
            prose-p:leading-relaxed prose-p:text-[var(--text-muted)] prose-li:text-[var(--text-muted)]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>

      <Footer />
    </div>
  );
}
