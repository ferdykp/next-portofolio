"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Work", id: "portofolio" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
  { label: "Notes", id: "blog" },
];

const ease = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    setIsLight(document.documentElement.classList.contains("light"));

    if (!pathname.startsWith("/blog")) {
      const ids = ["home", "about", "experience", "portofolio", "contact"];
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target?.id) setActiveSection(visible.target.id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: [0.01, 0.2, 0.5] },
      );
      sections.forEach((section) => observer.observe(section));
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("portfolio-theme-v4", next ? "light" : "dark");
    } catch {}
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (id === "blog") {
      router.push("/blog");
      return;
    }

    if (pathname.startsWith("/blog")) {
      router.push(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--bg)]/88 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-[1720px] mx-auto h-[72px] md:h-[82px] px-5 sm:px-8 lg:px-12 2xl:px-16 grid grid-cols-[1fr_auto] md:grid-cols-[180px_1fr_180px] items-center gap-6">
          <Link
            href="/"
            onClick={(event) => handleNavClick(event, "home")}
            className="justify-self-start font-display text-lg font-semibold tracking-[-.055em]"
          >
            FKP<span className="text-[var(--accent)]">.</span>
          </Link>

          <div className="hidden md:flex items-center justify-center gap-7 lg:gap-10">
            {navItems.map(({ label, id }) => {
              const active =
                id === "blog"
                  ? pathname.startsWith("/blog")
                  : activeSection === id && !pathname.startsWith("/blog");
              return (
                <a
                  key={id}
                  href={id === "blog" ? "/blog" : `/#${id}`}
                  onClick={(event) => handleNavClick(event, id)}
                  className={`relative py-2 text-[11px] font-medium transition-colors duration-300 ${
                    active
                      ? "text-[var(--text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-px bg-[var(--accent)] origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="hidden md:block justify-self-end text-[10px] font-mono uppercase tracking-[.14em] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            aria-label="Toggle color theme"
          >
            {isLight ? "Dark mode" : "Light mode"}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden justify-self-end text-[10px] font-mono uppercase tracking-[.14em]"
            aria-label="Open menu"
          >
            Menu
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-[var(--bg)] px-5 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="h-[72px] flex items-center justify-between border-b border-[var(--border)]">
              <span className="font-display text-lg font-semibold tracking-[-.055em]">
                FKP<span className="text-[var(--accent)]">.</span>
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="text-[10px] font-mono uppercase tracking-[.14em]"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col justify-center min-h-[calc(100svh-144px)]">
              {navItems.map(({ label, id }, index) => (
                <motion.a
                  key={id}
                  href={id === "blog" ? "/blog" : `/#${id}`}
                  onClick={(event) => handleNavClick(event, id)}
                  className="font-display text-[clamp(2.7rem,14vw,5.5rem)] tracking-[-.06em] leading-[1.02] py-1"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 + index * 0.04,
                    duration: 0.5,
                    ease,
                  }}
                >
                  {label}
                </motion.a>
              ))}
            </div>

            <div className="h-[72px] border-t border-[var(--border)] flex items-center justify-between">
              <span className="rev-label">Portfolio / 2026</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-[10px] font-mono uppercase tracking-[.14em] text-[var(--text-muted)]"
              >
                {isLight ? "Dark mode" : "Light mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
