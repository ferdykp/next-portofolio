import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const dynamic = "force-dynamic";

// Fungsi untuk mengambil data artikel yang berstatus 'published' dari API Laravel
async function getBlogPosts() {
  try {
    const res = await fetch(
      "https://selfnote.fdevsite.cloud/api/portfolio-notes",
      {
        cache: "no-store", // Dimatikan sementara agar data langsung muncul tanpa menunggu cache 5 menit
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
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-blue-600 selection:text-white antialiased">
      <Navbar />

      <main className="px-6 pt-28 pb-20 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Header */}
        <div className="max-w-3xl mb-16 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Articles, Notes & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Writing on{" "}
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Software & Hardware
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed text-balance">
            Tempat saya berbagi insight teknis mengenai arsitektur backend,
            optimasi full-stack web application, dan eksplorasi IoT.
          </p>
        </div>

        {/* Grid Artikel */}
        <div className="relative z-10">
          {posts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/20">
              <p className="text-zinc-500 font-medium">
                Belum ada artikel yang dipublikasikan.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group relative flex flex-col h-full bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/50 shadow-lg"
                >
                  {/* Konten Card — Seluruh area card fokus pada teks yang informatif */}
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono mb-4">
                      <span>
                        {new Date(post.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 mb-3 leading-snug">
                      <Link
                        href={`/blog/${post.id}`}
                        className="focus:outline-none"
                      >
                        <span className="absolute inset-0 z-10 rounded-2xl" />
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4 mb-6 flex-grow">
                      {post.content.replace(/<[^>]*>/g, "")}
                    </p>

                    <div className="flex items-center text-sm font-semibold text-blue-500 group-hover:text-blue-400 gap-1 pt-4 border-t border-zinc-800/40 mt-auto">
                      Read Full Article
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
