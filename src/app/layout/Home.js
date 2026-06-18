"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function HomeSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["an Engineer", "a Developer", "an IoT Enthusiast"],
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
      className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 md:py-32 border-b border-zinc-800"
    >
      <div className="text-center md:text-left max-w-xl order-2 md:order-1">
        <span className="text-blue-500 font-mono tracking-wider text-sm uppercase block mb-3">
          Available for Tech Projects
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Hi, I&apos;m Ferdy Kurnia
        </h1>
        <p className="text-zinc-400 text-xl md:text-2xl font-medium mb-6 min-h-[40px]">
          I am <span ref={typedRef} className="text-blue-500 font-semibold" />
        </p>
        <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
          Passionate about creating elegant web applications and robust IoT
          solutions using modern cutting-edge technologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
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

      <div className="order-1 md:order-2 flex justify-center w-full md:w-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r edit bg-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <Image
              src="/assets/profile.jpeg"
              alt="Foto Ferdy"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
