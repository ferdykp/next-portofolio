"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)] pointer-events-none"
    >
      <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-[0.3em] animate-pulse">
        booting_system...
      </span>
    </motion.div>
  );
}
