"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function HomeSection() {
  const typedRef = useRef(null);
  // const [time, setTime] = useState(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Software Engineer.",
        "Laravel & DevOps Specialist.",
        "Systems Builder.",
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 2200,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // useEffect(() => {
  //   const update = () =>
  //     setTime(
  //       new Date().toLocaleTimeString("en-GB", {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //         second: "2-digit",
  //         timeZone: "Asia/Jakarta",
  //       }),
  //     );
  //   update();
  //   const interval = setInterval(update, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const stats = [
    // { label: "Cities deployed", value: "9" },
    // { label: "Production systems", value: "2" },
    { label: "Years Study College", value: "4" },
    { label: "Years Work Experience", value: "1.5+" },
  ];

  return (
    <section
      id="home"
      className="relative pt-16 pb-24 md:pt-24 md:pb-32 border-b border-[var(--border)] overflow-hidden"
    >
      <div className="bp-grid absolute inset-0 -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] text-xs font-mono text-[var(--accent-2)] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] animate-pulse" />
            Current position as a Software Engineer{" "}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text)] mb-4 leading-[1.05]"
          >
            Ferdy Kurnia
            <br />
            Panggabean
          </motion.h1>

          <p className="text-[var(--text-muted)] text-lg md:text-xl font-medium mb-6 min-h-[32px] font-mono">
            <span ref={typedRef} className="text-[var(--accent)]" />
          </p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--text-muted)] text-base leading-relaxed mb-9 max-w-lg"
          >
            I design and ship production-grade full-stack systems — from
            multi-branch warehouse platforms to multi-tenant SaaS — leading
            projects end-to-end through Laravel, Tailwind, and DevOps
            infrastructure.
          </motion.p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contact"
              className="bg-[var(--accent)] text-[var(--bg)] font-mono font-semibold uppercase tracking-widest text-xs px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-2">
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
                  className="w-11 h-11 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border)] hover:border-[var(--accent)] rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-md pt-6 border-t border-[var(--border)]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-[var(--text)]">
                  {s.value}
                </div>
                <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wide mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bracket-frame relative w-56 h-56 md:w-96 md:h-96 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
            <Image
              src="/assets/profile.jpeg"
              alt="Ferdy Kurnia Panggabean"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Signature element: telemetry-style status panel */}
          <div className="w-full max-w-96 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 font-mono text-[11px]">
            {/* <div className="flex items-center justify-between mb-3 pb-3 border-b border-[var(--border)]">
              <span className="text-[var(--text-muted)] uppercase tracking-widest">
                System status
              </span>
              <span className="flex items-center gap-1.5 text-[var(--accent-2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)] animate-pulse" />
                online
              </span>
            </div> */}
            <div className="space-y-2 text-[var(--text-muted)]">
              <div className="flex  justify-between">
                <span>LOCATION</span>
                <span className="text-[var(--text)]">Jakarta, Indonesia</span>
              </div>
              {/* <div className="flex justify-between">
                <span>LOCAL TIME</span>
                <span className="text-[var(--text)]">{time || "--:--:--"}</span>
              </div> */}
              {/* <div className="flex justify-between">
                <span>STACK</span>
                <span className="text-[var(--text)]">LARAVEL / TAILWIND</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
