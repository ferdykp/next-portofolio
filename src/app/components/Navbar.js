"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    setIsLight(document.documentElement.classList.contains("light"));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {}
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const isBlogPage = pathname.startsWith("/blog");

    if (id === "blog") {
      router.push("/blog");
      return;
    }
    if (isBlogPage) {
      router.push(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Work", id: "portofolio" },
    { label: "Contact", id: "contact" },
    { label: "Blog", id: "blog" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-0 sm:px-4 pt-0 sm:pt-4">
      <nav
        className={`w-full flex justify-between items-center px-6 transition-all duration-500 ease-out font-body ${
          isScrolled
            ? "max-w-4xl bg-[var(--bg-elevated)]/90 backdrop-blur-xl py-3 rounded-2xl border border-[var(--border)] shadow-lg md:px-8"
            : "max-w-7xl bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "home")}
          className="font-display text-xl font-bold tracking-tight text-[var(--text)]"
        >
          FKP<span className="text-[var(--accent)]">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 border border-[var(--border)] rounded-full px-1 py-1">
          {navItems.map(({ label, id }) => {
            const isBlogActive = id === "blog" && pathname.startsWith("/blog");
            return (
              <a
                key={id}
                href={id === "blog" ? "/blog" : `/#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full transition-colors duration-200 ${
                  isBlogActive
                    ? "text-[var(--bg)] bg-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            {isLight ? (
              <FiMoon className="w-4 h-4" />
            ) : (
              <FiSun className="w-4 h-4" />
            )}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-4 py-2 text-xs font-mono font-semibold uppercase tracking-widest text-[var(--bg)] bg-[var(--accent)] rounded-full hover:opacity-90 transition-opacity"
          >
            Let&apos;s talk
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)]"
          >
            {isLight ? (
              <FiMoon className="w-4 h-4" />
            ) : (
              <FiSun className="w-4 h-4" />
            )}
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center text-[var(--text)]"
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[var(--bg)]/97 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-opacity duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map(({ label, id }, index) => (
          <a
            key={id}
            href={id === "blog" ? "/blog" : `/#${id}`}
            onClick={(e) => handleNavClick(e, id)}
            style={{
              transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
              transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
            }}
            className="font-display text-3xl font-semibold tracking-tight text-[var(--text)] transition-all duration-500"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
