"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function HomeSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      // Memperbaiki grammar dari "an Software" menjadi "a Software"
      strings: [
        "a Software Engineer.",
        "a Full-Stack Developer.",
        "an IoT Architect.",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-20 md:py-32 border-b border-zinc-800 overflow-hidden"
    >
      {/* Background Soft Glow Premium */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center md:text-left max-w-xl order-2 md:order-1 relative z-10">
        {/* Mengubah badge menjadi status profesional industri saat ini */}
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Currently working as a Software Engineer
        </span>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4 leading-tight">
          Hi, I&apos;m <br />
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Ferdy Kurnia Panggabean
          </span>
        </h1>

        <p className="text-zinc-400 text-xl md:text-2xl font-medium mb-6 min-h-[40px]">
          I am{" "}
          <span
            ref={typedRef}
            className="text-blue-500 font-semibold underline decoration-zinc-800"
          />
        </p>

        {/* Menyesuaikan deskripsi dengan bobot Engineer yang menangani real-world application */}
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md text-balance">
          Specialized in building scalable full-stack web applications,
          optimizing backend architectures, and bridging ecosystem gaps with
          robust hardware/IoT integrations.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-sm shadow-lg shadow-blue-600/20"
          >
            Let&apos;s Connect
          </a>
          <div className="flex items-center gap-3">
            {[
              {
                href: "https://github.com/ferdykp",
                icon: FaGithub,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/ferdy-kurnia-panggabean-4146631b8/",
                icon: FaLinkedinIn,
                label: "LinkedIn",
              },
              {
                href: "https://www.instagram.com/ferdy.panggabean/",
                icon: FaInstagram,
                label: "Instagram",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 rounded-lg transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 flex justify-center w-full md:w-auto relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
            <Image
              src="/assets/profile.jpeg"
              alt="Ferdy Kurnia Panggabean"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
