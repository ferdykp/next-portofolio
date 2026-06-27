"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Cek jika saat ini merupakan halaman blog (bukan beranda '/')
    const isBlogPage = pathname.startsWith("/blog");

    if (id === "blog") {
      // Jika klik menu Blog, langsung pindah ke route /blog tanpa scroll id
      router.push("/blog");
    } else {
      if (isBlogPage) {
        // Jika sedang di halaman blog dan klik menu home/about/portofolio/contact,
        // redirect ke home membawa hash anchor target
        router.push(`/#${id}`);
      } else {
        // Jika sudah berada di Beranda, lakukan smooth scroll langsung ke elemen target
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Portofolio", id: "portofolio" },
    { label: "Kontak", id: "contact" },
    { label: "My Blog", id: "blog" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-0 sm:p-4 transition-all duration-500 ease-out">
      <nav
        className={`w-full transition-all duration-500 ease-in-out font-sans flex justify-between items-center px-8
          ${
            isScrolled
              ? "max-w-4xl bg-black/60 backdrop-blur-xl py-3 rounded-full border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.15)] md:px-10"
              : "max-w-7xl bg-transparent py-6 border-b border-transparent"
          }`}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          onClick={(e) => handleNavClick(e, "home")}
        >
          FERDY<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Menu - Floating Pill Style */}
        <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-sm">
          {navItems.map(({ label, id }) => {
            // Logika penentuan status active menu blog secara visual
            const isBlogActive = id === "blog" && pathname.startsWith("/blog");

            return (
              <a
                key={id}
                href={id === "blog" ? "/blog" : `/#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 rounded-full relative group
                  ${isBlogActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
              >
                {label}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full transition-opacity duration-300 ${isBlogActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                />
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300"
          >
            Talk With Me
          </a>
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none p-2 z-50 mix-blend-difference"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between relative">
              <span
                className={`w-full h-[1.5px] bg-white rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`w-3/4 h-[1.5px] bg-white rounded transition-all duration-300 self-end ${isMenuOpen ? "opacity-0 w-0" : ""}`}
              />
              <span
                className={`w-full h-[1.5px] bg-white rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-2xl z-40 flex flex-col justify-center items-center transition-all duration-700 md:hidden
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navItems.map(({ label, id }, index) => (
            <a
              key={id}
              href={id === "blog" ? "/blog" : `/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                transform: isMenuOpen ? "translateY(0)" : "translateY(30px)",
              }}
              className={`text-3xl font-light tracking-widest transition-all duration-500 uppercase hover:scale-110
                ${id === "blog" && pathname.startsWith("/blog") ? "text-white font-semibold" : "text-gray-400 hover:text-white"}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
