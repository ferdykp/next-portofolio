import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // PENTING: Hapus class conditional "show ? ..." dan biarkan fixed top-0 w-full z-50
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center rounded font-mono font-bold fixed top-0 w-full z-50">
      <a
        href="#home"
        className="text-xl font-bold text-white"
        onClick={(e) => handleSmoothScroll(e, "home")}
      >
        Ferdy
      </a>

      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div
          className={`absolute right-0 mt-2 w-48 bg-black rounded-md shadow-md overflow-hidden transition-all duration-300 z-40 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="block px-4 py-3 text-gray-300 hover:text-blue-500 hover:bg-blue-50"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-4">
        {navItems.map(({ label, id }) => (
          <div key={id} className="hover:bg-blue-100 rounded-md transition">
            <a
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="block px-4 py-2 text-gray-300 hover:text-blue-500"
            >
              {label}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
