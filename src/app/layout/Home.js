"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function HomeSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["an Engineer", "a Developer", "a Self Seeker"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-80 py-50 md:py-50 transition-all duration-500 ease-in-out"
    >
      <Image
        src="/assets/profile.jpeg"
        alt="Foto Ferdy"
        width={300}
        height={300}
        // className="rounded-full object-cover shadow-lg"
        className="rounded-full object-cover shadow-lg w-40 h-60 md:w-72 md:h-100 transition-all duration-500 ease-in-out"
      />
      <div className="text-center md:text-left max-w-lg transition-all duration-500 ease-in-out">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Welcome to My Page
        </h1>
        <p className="text-gray-700 text-2xl md:text-3xl mb-6">
          I&apos;m <span ref={typedRef} className="text-blue-600" />
        </p>
        <p className="max-w-md text-gray-600 mb-8">
          Passionate about creating elegant and efficient website and IoT
          solutions using modern technologies.
        </p>
        <div className="flex justify-center md:justify-start items-center gap-6">
          {[
            {
              href: "https://www.instagram.com/ferdy.panggabean/",
              icon: FaInstagram,
              label: "Instagram",
            },
            {
              href: "https://www.linkedin.com/in/ferdy-kurnia-panggabean-4146631b8/",
              icon: FaLinkedinIn,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/ferdykp",
              icon: FaGithub,
              label: "GitHub",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group"
            >
              <div className="p-3 border-2 border-white rounded-full transition-all duration-300 ease-in-out group-hover:border-blue-400 transform group-hover:scale-110">
                <Icon className="text-white w-6 h-6 transition-colors duration-300 group-hover:text-blue-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
