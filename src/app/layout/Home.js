"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import TiltSurface from "../components/TiltSurface";

const ease = [0.22, 1, 0.36, 1];

function HeroLine({ children, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={shouldReduceMotion ? false : { y: "115%", rotateX: 14, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }}
        transition={shouldReduceMotion ? { duration: 0.01 } : { delay, duration: 1.12, ease }}
        style={{ transformPerspective: 900 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HomeSection() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-[96px] md:pt-[118px] pb-8 md:pb-12 flex flex-col justify-between border-b border-[var(--border)]"
    >
      <div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.7, ease }}
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

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-10 md:pt-14 items-end">
          <div className="lg:col-span-8 xl:col-span-9 relative z-10">
            <h1 className="font-display uppercase font-semibold text-[clamp(4.3rem,12vw,12.8rem)] tracking-[-.085em] leading-[.76]">
              <HeroLine delay={0.16}>Software</HeroLine>
              <HeroLine delay={0.23}>
                <span className="text-[var(--accent)]">Engineer</span>
              </HeroLine>
            </h1>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 42, scale: 0.94, rotateY: -8, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0, filter: "blur(0px)" }}
            transition={shouldReduceMotion ? { duration: 0.01 } : { delay: 0.4, duration: 1.25, ease }}
            style={{ transformPerspective: 1100 }}
            className="lg:col-span-4 xl:col-span-3 lg:pb-2"
          >
            <TiltSurface className="hero-portrait group relative" maxTilt={8} lift={3}>
              {/* decorative frame */}
              <div className="absolute -inset-2 md:-inset-3 rounded-[28px] border border-[var(--border)]" />

              {/* accent detail */}
              <div className="absolute -top-2 -right-2 z-20 h-4 w-4 rounded-full bg-[var(--accent)] md:h-5 md:w-5" />

              {/* image wrapper */}
              <div
                className="
      relative
      aspect-[4/5]
      overflow-hidden
      rounded-[22px]
      border border-[var(--border)]
      bg-[var(--surface)]
      p-1.5
      md:p-2
      soft-shadow
    "
              >
                <div className="relative h-full w-full overflow-hidden rounded-[17px]">
                  <Image
                    src="/assets/profile_ai.jpg"
                    alt="Ferdy Kurnia Panggabean"
                    fill
                    priority
                    sizes="(max-width: 1024px) 420px, 24vw"
                    className="depth-image
          object-cover
          grayscale-[0.08]
          transition-transform
          duration-[1200ms]
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:scale-[1.035]
        "
                  />

                  {/* subtle overlay */}
                  <div
                    className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-t
          from-black/10
          via-transparent
          to-transparent
        "
                  />
                </div>
              </div>
            </TiltSurface>
          </motion.div>
        </div>
      </div>

      <div className="hero-orbit hidden 2xl:grid" aria-hidden="true">
        <div className="hero-orbit-ring hero-orbit-ring-a" />
        <div className="hero-orbit-ring hero-orbit-ring-b" />
        <div className="hero-orbit-core">
          <strong>FKP</strong>
          <span>SOFTWARE SYSTEMS</span>
        </div>
        <span className="hero-orbit-label hero-orbit-label-a">BUILD / 01</span>
        <span className="hero-orbit-label hero-orbit-label-b">DEPLOY / 24</span>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0.01 } : { delay: 0.42, duration: 0.85, ease }}
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
