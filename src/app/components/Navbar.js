"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mengaktifkan efek setelah scroll sejauh 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Portofolio", id: "portofolio" },
    { label: "Kontak", id: "contact" },
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
        {/* Brand / Logo dengan efek Gradasi Glowing */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          onClick={(e) => handleSmoothScroll(e, "home")}
        >
          FERDY<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu - Floating Pill Style */}
        <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-sm">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="px-5 py-2 text-xs uppercase tracking-widest font-semibold text-gray-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 relative group"
            >
              {label}
              {/* Dot Indicator yang muncul saat hover */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button / Status Indicator Elegan */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
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

      {/* Mobile Menu Overlay - Full Blur Premium */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-2xl z-40 flex flex-col justify-center items-center transition-all duration-700 md:hidden
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navItems.map(({ label, id }, index) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                transform: isMenuOpen ? "translateY(0)" : "translateY(30px)",
              }}
              className="text-3xl font-light tracking-widest text-gray-400 hover:text-white hover:scale-110 transition-all duration-500 uppercase"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
