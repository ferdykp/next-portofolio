"use client";

import { motion } from "framer-motion";

/**
 * Wraps children with a scroll-triggered fade + slide-up reveal.
 * Fires once when the element enters the viewport, respects
 * prefers-reduced-motion via framer-motion's built-in handling.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
