"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.82,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();
  const initialY = direction === "down" ? -distance : distance;
  const initialRotate = direction === "down" ? -1.25 : 1.25;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: initialY, rotateX: initialRotate, filter: "blur(7px)", transformPerspective: 1100 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -70px 0px" }}
      transition={shouldReduceMotion ? { duration: 0.01 } : { duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
