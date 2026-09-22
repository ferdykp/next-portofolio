"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.82,
  className = "",
}) {
  const initialY = direction === "down" ? -distance : distance;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -70px 0px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
