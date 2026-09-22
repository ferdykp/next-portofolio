"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[120] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#11110f]"
        initial={{ y: 0 }}
        animate={{ y: "-101%" }}
        transition={{ delay: 0.62, duration: 0.72, ease }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#11110f]"
        initial={{ y: 0 }}
        animate={{ y: "101%" }}
        transition={{ delay: 0.62, duration: 0.72, ease }}
      />
      <motion.div
        className="absolute inset-0 grid place-items-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -12 }}
        transition={{ delay: 0.38, duration: 0.28 }}
      >
        <span className="font-display text-2xl md:text-3xl font-semibold tracking-[-.06em] text-[#f4f2ec]">
          FKP<span className="text-[#ff4b33]">.</span>
        </span>
      </motion.div>
    </div>
  );
}
