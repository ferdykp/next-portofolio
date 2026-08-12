import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

export const dynamic = "force-dynamic";

async function getBlogPosts() {
  try {
    const res = await fetch(
      "https://selfnote.fdevsite.cloud/api/portfolio-notes",
      {
        cache: "no-store",
      },
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Gagal memuat artikel blog:", error);
    return [];
  }
}

export const metadata = {
  title: "Blog & Insights | Ferdy Kurnia Panggabean",
  description:
    "Artikel seputar Software Engineering, Full-Stack Development, dan IoT Architecture.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)] antialiased">
      <Navbar />

      <main className="px-6 pt-28 pb-20 max-w-7xl mx-auto">
        <SectionLabel index={4} title="Blog" />

        <div className="max-w-2xl mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] mb-4">
            Writing on software & hardware.
          </h1>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Notes on backend architecture, full-stack optimization, and IoT
            exploration.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[var(--border)] rounded-xl">
            <p className="text-[var(--text-muted)] font-mono text-sm">
              No articles published yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-xl overflow-hidden transition-colors duration-300"
              >
                <div className="flex flex-col flex-grow p-6">
                  <span className="font-mono text-xs text-[var(--text-muted)] mb-4">
                    {new Date(post.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  <h2 className="font-display text-lg font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors line-clamp-2 mb-3 leading-snug">
                    <Link
                      href={`/blog/${post.id}`}
                      className="focus:outline-none"
                    >
                      <span className="absolute inset-0 z-10 rounded-xl" />
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-4 mb-6 flex-grow">
                    {post.content.replace(/<[^>]*>/g, "")}
                  </p>

                  <div className="flex items-center text-sm font-mono font-semibold text-[var(--accent)] gap-1 pt-4 border-t border-[var(--border)] mt-auto">
                    Read article
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
