import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

export const dynamic = "force-dynamic";

async function getBlogPosts() {
  try {
    const res = await fetch("https://selfnote.fdevsite.cloud/api/portfolio-notes", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Gagal memuat artikel blog:", error);
    return [];
  }
}

export const metadata = {
  title: "Blog & Insights | Ferdy Kurnia Panggabean",
  description: "Artikel seputar Software Engineering, Full-Stack Development, dan IoT Architecture.",
};

function plainText(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
      <Navbar />

      <main className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 pt-[112px] md:pt-[142px] pb-24 md:pb-36">
        <SectionLabel title="Notes" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
          <h1 className="font-display text-[clamp(3.6rem,9vw,10rem)] font-semibold uppercase tracking-[-.08em] leading-[.78] lg:col-span-9">
            Field
            <span className="block text-[var(--accent)]">Notes</span>
          </h1>
          <p className="lg:col-span-3 lg:self-end text-base md:text-lg leading-relaxed text-[var(--text-muted)]">
            Short notes on software, systems, infrastructure, and things learned while building.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="border-y border-[var(--border)] py-20 text-center">
            <p className="rev-label">No notes published yet</p>
          </div>
        ) : (
          <div className="border-t border-[var(--border)]">
            {posts.map((post) => (
              <article key={post.id} className="group border-b border-[var(--border)]">
                <Link
                  href={`/blog/${post.id}`}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 md:py-9 items-start"
                >
                  <span className="md:col-span-2 text-[9px] font-mono uppercase tracking-[.12em] text-[var(--text-muted)]">
                    {new Date(post.created_at).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <h2 className="md:col-span-6 font-display text-2xl md:text-3xl lg:text-4xl tracking-[-.045em] leading-[1.02] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="md:col-span-4 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
                    {plainText(post.content)}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
