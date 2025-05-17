import { useState, useEffect, useCallback } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // useCallback supaya fungsi ini stabil dan tidak berubah tiap render
  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]); // lastScrollY jadi dependency

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]); // tambahkan controlNavbar sebagai dependency

  return (
    <nav
      className={`bg-dark shadow-md px-30 py-8 flex justify-between items-center rounded font-mono font-bold fixed top-0 w-full transition-transform duration-300 mb-30 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="#home" className="text-xl font-bold">
        Ferdy
      </a>
      <div className="space-x-4 flex">
        {/* menu tetap sama */}
        <div className="hover:bg-blue-100 rounded-md transition">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            Home
          </a>
        </div>
        <div className="hover:bg-blue-100 rounded-md transition">
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            About
          </a>
        </div>
        <div className="hover:bg-blue-100 rounded-md transition">
          <a
            href="#service"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            Service
          </a>
        </div>
        <div className="hover:bg-blue-100 rounded-md transition">
          <a
            href="#portofolio"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            Portofolio
          </a>
        </div>
        <div className="hover:bg-blue-100 rounded-md transition">
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
