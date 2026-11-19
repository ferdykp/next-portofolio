"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

export default function Loader() {
  const shouldReduceMotion = useReducedMotion();
  const curtainTransition = shouldReduceMotion ? { duration: 0.01 } : { delay: 0.62, duration: 0.72, ease };

  return (
    <div className="fixed inset-0 z-[120] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#11110f]"
        initial={shouldReduceMotion ? false : { y: 0 }}
        animate={{ y: "-101%" }}
        transition={curtainTransition}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#11110f]"
        initial={shouldReduceMotion ? false : { y: 0 }}
        animate={{ y: "101%" }}
        transition={curtainTransition}
      />
      <motion.div
        className="loader-brand absolute inset-0 z-10 grid place-items-center"
        initial={shouldReduceMotion ? false : { opacity: 1, y: 0, scale: 0.96, filter: "blur(2px)" }}
        animate={{ opacity: [1, 1, 0], y: [0, 0, -10], scale: [0.96, 1, 1.02], filter: ["blur(2px)", "blur(0px)", "blur(8px)"] }}
        transition={shouldReduceMotion ? { duration: 0.01 } : { times: [0, 0.58, 1], duration: 1.02, ease }}
      >
        <div className="loader-lockup">
          <span className="loader-orbit loader-orbit-a" />
          <span className="loader-orbit loader-orbit-b" />
          <span className="font-display text-3xl md:text-4xl font-semibold tracking-[-.06em] text-[#f4f2ec]">
            FKP<span className="text-[#ff4b33]">.</span>
          </span>
          <span className="loader-caption">SOFTWARE / SYSTEMS / 2026</span>
        </div>
      </motion.div>
      <motion.div
        className="loader-progress absolute bottom-[12%] left-[12%] right-[12%] z-20 h-px origin-left bg-white/10"
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={shouldReduceMotion ? { duration: 0.01 } : { delay: 0.08, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
