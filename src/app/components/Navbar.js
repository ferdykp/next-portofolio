"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Work", id: "portofolio" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Activity", id: "github-activity" },
  { label: "Notes", id: "notes" },
  { label: "Contact", id: "contact" },
];

const ease = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [themeWipe, setThemeWipe] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    setIsLight(document.documentElement.classList.contains("light"));

    if (!pathname.startsWith("/blog")) {
      const ids = ["home", "about", "experience", "portofolio", "github-activity", "notes", "contact"];
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

  const toggleTheme = (event) => {
    const next = !document.documentElement.classList.contains("light");
    if (!shouldReduceMotion) {
      const bounds = event?.currentTarget?.getBoundingClientRect();
      setThemeWipe({
        id: Date.now(),
        x: bounds ? bounds.left + bounds.width / 2 : window.innerWidth / 2,
        y: bounds ? bounds.top + bounds.height / 2 : 40,
        theme: next ? "light" : "dark",
      });
    }
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("portfolio-theme-v5", next ? "light" : "dark");
    } catch {}
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <AnimatePresence>
        {themeWipe && (
          <motion.div
            key={themeWipe.id}
            className={`theme-wipe theme-wipe-${themeWipe.theme}`}
            initial={{ clipPath: `circle(0px at ${themeWipe.x}px ${themeWipe.y}px)`, opacity: 0.9 }}
            animate={{ clipPath: `circle(160vmax at ${themeWipe.x}px ${themeWipe.y}px)`, opacity: 0 }}
            transition={{ duration: 0.9, ease }}
            onAnimationComplete={() => setThemeWipe((current) => current?.id === themeWipe.id ? null : current)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <header className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}>
        <nav className={`nav-dock ${isScrolled ? "nav-dock-scrolled" : ""}`} aria-label="Main navigation">
          <Link
            href="/"
            onClick={(event) => handleNavClick(event, "home")}
            className="nav-brand"
          >
            <span className="nav-brand-mark">F<span>.</span></span>
            <span className="nav-brand-copy"><b>FERDY</b><small>SOFTWARE / SYSTEMS</small></span>
          </Link>

          <div className="nav-links">
            {navItems.map(({ label, id }) => {
              const active = activeSection === id;
              return (
                <motion.a
                  key={id}
                  href={`/#${id}`}
                  onClick={(event) => handleNavClick(event, id)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.035 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  className={`nav-link-3d nav-dock-link ${
                    active
                      ? "text-[var(--text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {active && <motion.span layoutId="active-nav-pill" className="nav-active-pill" transition={{ type: "spring", stiffness: 330, damping: 30 }} />}
                  {label}
                </motion.a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="nav-theme-button"
            aria-label="Toggle color theme"
          >
            <span className={`nav-theme-icon ${isLight ? "is-light" : ""}`} aria-hidden="true"><i /></span>
            <span>{isLight ? "Dark" : "Light"}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="nav-menu-button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span><i className={isMenuOpen ? "is-open" : ""}><b /><b /></i>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="nav-mobile-panel fixed inset-0 z-[90] bg-[var(--bg)] px-5 sm:px-8"
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
                  href={`/#${id}`}
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
