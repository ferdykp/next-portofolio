"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function HomeSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="portfolio-shell hero-section" id="home" aria-labelledby="home-title">
      <div className="hero-copy">
        <motion.h1
          className="hero-title"
          id="home-title"
          initial={reduceMotion ? false : { opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.82, delay: reduceMotion ? 0 : 0.08, ease }}
        >
          <span>Systems for</span>
          <span>real work.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.65, delay: reduceMotion ? 0 : 0.2, ease }}
        >
          Software engineer working across products and infrastructure.
        </motion.p>

        <motion.a
          className="text-link"
          href="#work"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.35 }}
        >
          Selected work
          <svg className="link-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 13 13 3M4 3h9v9" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </motion.a>
      </div>

      <motion.figure
        className="hero-portrait"
        initial={reduceMotion ? false : { clipPath: "inset(12% 0 0 0)", opacity: 0 }}
        animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        transition={{ duration: reduceMotion ? 0.01 : 1.05, delay: reduceMotion ? 0 : 0.12, ease }}
      >
        <Image
          src="/assets/profile_ai.jpg"
          alt="Ferdy Kurnia Panggabean"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 700px) 78vw, (max-width: 900px) 40vw, 36vw"
        />
      </motion.figure>
    </section>
  );
}
