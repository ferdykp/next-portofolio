"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function HeroLine({ children, delay = 0 }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.9, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-[100svh] pt-[96px] md:pt-[118px] pb-8 md:pb-12 flex flex-col justify-between border-b border-[var(--border)]"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="grid grid-cols-2 md:grid-cols-12 gap-4 pb-6 md:pb-8 border-b border-[var(--border)]"
        >
          <p className="col-span-1 md:col-span-5 rev-label text-[var(--text)]">
            Ferdy Kurnia Panggabean
          </p>
          <p className="hidden md:block md:col-span-4 rev-label">
            Full-stack / DevOps
          </p>
          <p className="col-span-1 md:col-span-3 rev-label text-right">
            Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-10 md:pt-14 items-end">
          <div className="lg:col-span-8 xl:col-span-9 relative z-10">
            <h1 className="font-display uppercase font-semibold text-[clamp(4.3rem,12vw,12.8rem)] tracking-[-.085em] leading-[.76]">
              <HeroLine delay={0.16}>Software</HeroLine>
              <HeroLine delay={0.23}>
                <span className="text-[var(--accent)]">Engineer</span>
              </HeroLine>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.28, duration: 0.9, ease }}
            className="lg:col-span-4 xl:col-span-3 lg:pb-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface)] soft-shadow">
              <Image
                src="/assets/profile_ai.jpg"
                alt="Ferdy Kurnia Panggabean"
                fill
                priority
                sizes="(max-width: 1024px) 420px, 24vw"
                className="object-cover grayscale-[0.12] transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.025]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.85, ease }}
        className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-8 pt-8 md:pt-10 mt-10 md:mt-16 border-t border-[var(--border)] items-end"
      >
        <p className="md:col-span-7 lg:col-span-6 text-xl md:text-2xl lg:text-[2rem] leading-[1.22] tracking-[-.03em] max-w-3xl text-balance">
          I build useful digital products, internal systems, and connected tools
          from interface to infrastructure.
        </p>

        <div className="md:col-span-5 lg:col-span-6 flex md:justify-end gap-x-5 gap-y-3 flex-wrap text-[11px] font-medium">
          <a href="#portofolio" className="editorial-link">
            Selected work
          </a>
          <a
            href="https://github.com/ferdykp"
            target="_blank"
            rel="noreferrer"
            className="editorial-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ferdy-kurnia-panggabean-4146631b8/"
            target="_blank"
            rel="noreferrer"
            className="editorial-link"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
