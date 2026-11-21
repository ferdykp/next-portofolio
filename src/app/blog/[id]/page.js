import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";

export const dynamic = "force-dynamic";

function articleText(html = "") {
  return html
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<\/(p|div|h[1-6]|li|blockquote)\s*>/gi, "\n\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/—/g, ",")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function cleanCopy(text = "") {
  return text.replace(/—/g, ",");
}

async function getBlogPostDetail(id) {
  try {
    const res = await fetch(`https://selfnote.fdevsite.cloud/api/portfolio-notes/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return { post: null, error: res.status >= 500 };
    return { post: await res.json(), error: false };
  } catch (error) {
    console.error("Gagal memuat detail artikel:", error);
    return { post: null, error: true };
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { post, error } = await getBlogPostDetail(id);
  if (error) return { title: "Notes temporarily unavailable" };
  if (!post || post.status !== "published") return { title: "Article Not Found" };

  return {
    title: `${cleanCopy(post.title)} | Ferdy Kurnia Panggabean`,
    description: articleText(post.content).substring(0, 160),
  };
}

export default async function BlogPostDetailPage({ params }) {
  const { id } = await params;
  const { post, error } = await getBlogPostDetail(id);

  if (error) {
    return (
      <div className="scene-root min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        <Navbar />
        <main className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 pt-[112px] md:pt-[142px] pb-24 md:pb-36">
          <section role="alert" className="border-y border-[var(--border)] py-16 text-center">
            <h1 className="font-display text-3xl tracking-[-.04em]">This note could not load.</h1>
            <Link href="/blog" className="editorial-link mt-5 text-sm text-[var(--accent)]">Back to notes</Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post || post.status !== "published") notFound();

  return (
    <div className="scene-root min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
      <Navbar />

      <main className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 pt-[112px] md:pt-[142px] pb-24 md:pb-36">
        <Reveal>
        <div className="flex items-center justify-between gap-5 pb-5 border-b border-[var(--border)] mb-12 md:mb-16">
          <Link
            href="/blog"
            className="editorial-link text-[10px] font-mono uppercase tracking-[.12em] text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Notes
          </Link>
          <span className="text-[9px] font-mono uppercase tracking-[.12em] text-[var(--text-muted)]">
            {new Date(post.created_at).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <header className="max-w-6xl mb-10 md:mb-14">
          <p className="rev-label text-[var(--accent)] mb-5">Field note</p>
          <h1 className="font-display text-[clamp(3rem,7vw,8rem)] font-medium tracking-[-.07em] leading-[.88] text-balance">
            {cleanCopy(post.title)}
          </h1>
        </header>
        </Reveal>

        {post.images && (
          <Reveal>
            <div className="relative aspect-[16/8] md:aspect-[21/9] w-full overflow-hidden bg-[var(--surface)] mb-12 md:mb-20">
              <Image
                src={`https://selfnote.fdevsite.cloud/storage/${post.images}`}
                alt={cleanCopy(post.title)}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 pt-5 border-t border-[var(--border)]">
              <span className="rev-label">Ferdy Kurnia Panggabean</span>
            </div>
          </aside>

          <Reveal className="lg:col-span-7 lg:col-start-5">
            <article className="prose-custom max-w-none whitespace-pre-wrap text-base md:text-lg">
              {articleText(post.content)}
            </article>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
