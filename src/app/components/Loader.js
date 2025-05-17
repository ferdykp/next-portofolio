// components/Loader.js
"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-3xl font-bold"
    ></motion.div>
  );
}
