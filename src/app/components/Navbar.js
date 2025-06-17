import { useState, useEffect, useCallback } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`bg-dark shadow-md px-30 py-8 flex justify-between items-center rounded font-mono font-bold fixed top-0 w-full transition-transform duration-300 mb-30 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a
        href="#home"
        className="text-xl font-bold"
        onClick={(e) => handleSmoothScroll(e, "home")}
      >
        Ferdy
      </a>
      <div className="space-x-4 flex">
        {[
          { label: "Home", id: "home" },
          { label: "About", id: "about" },
          // { label: "Service", id: "service" },
          { label: "Portofolio", id: "portofolio" },
          { label: "Kontak", id: "contact" },
        ].map(({ label, id }) => (
          <div key={id} className="hover:bg-blue-100 rounded-md transition">
            <a
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="block px-4 py-2 text-gray-700 hover:text-blue-600"
            >
              {label}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
