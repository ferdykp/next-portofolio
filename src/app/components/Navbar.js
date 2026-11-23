"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function RelayMark() {
  return (
    <svg className="relay-mark" viewBox="0 0 48 22" fill="none" aria-hidden="true">
      <path d="M1 4h10v10H1zM11 9h8V4h8v10h8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M35 4h11M35 9h11M35 14h11" stroke="currentColor" strokeWidth="1.7" />
      <path d="M46 18h2" stroke="var(--accent)" strokeWidth="3" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const homePrefix = pathname === "/" ? "" : "/";

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    setIsDark(nextIsDark);

    try {
      localStorage.setItem("portfolio-theme-v5", nextIsDark ? "dark" : "light");
    } catch {}
  };

  const sectionHref = (id) => `${homePrefix}#${id}`;

  return (
    <>
      <header className="site-header">
        <div className="portfolio-shell nav-inner">
          <Link className="brand-link" href={sectionHref("home")} aria-label="Ferdy, home">
            <span className="brand-wordmark">FERDY</span>
            <RelayMark />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a className="nav-link" href={sectionHref(link.id)} key={link.id}>
                {link.label}
              </a>
            ))}
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </nav>

          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-navigation" hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              className="nav-link"
              href={sectionHref(link.id)}
              key={link.id}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            Switch to {isDark ? "light" : "dark"} theme
          </button>
        </nav>
      </div>
    </>
  );
}
