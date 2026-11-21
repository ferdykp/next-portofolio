"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const horizontalTracks = [
  { at: 13, duration: 23, delay: -4 },
  { at: 28, duration: 31, delay: -19 },
  { at: 46, duration: 26, delay: -12 },
  { at: 64, duration: 35, delay: -27 },
  { at: 81, duration: 29, delay: -8 },
];

const verticalTracks = [
  { at: 12, duration: 32, delay: -13 },
  { at: 29, duration: 27, delay: -7 },
  { at: 48, duration: 38, delay: -31 },
  { at: 69, duration: 30, delay: -17 },
  { at: 88, duration: 35, delay: -25 },
];

export default function AmbientWallpaper() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { damping: 28, stiffness: 55, mass: 1.2 });
  const pointerY = useSpring(useMotionValue(0), { damping: 28, stiffness: 55, mass: 1.2 });
  const { scrollYProgress } = useScroll();
  const scrollDrift = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handlePointerMove = (event) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 34);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 28);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY, shouldReduceMotion]);

  return (
    <div className="ambient-wallpaper" aria-hidden="true">
      <motion.div className="ambient-glow-parallax" style={{ x: pointerX, y: scrollDrift }}>
        <div className="ambient-glow ambient-glow-red" />
      </motion.div>
      <motion.div className="ambient-glow-parallax" style={{ x: pointerX, y: pointerY }}>
        <div className="ambient-glow ambient-glow-blue" />
      </motion.div>
      <div className="ambient-grid" />
      <div className="ambient-streams">
        {horizontalTracks.map((track, index) => (
          <span
            key={`horizontal-${track.at}`}
            className="ambient-track ambient-track-horizontal"
            style={{ top: `${track.at}%`, "--flow-duration": `${track.duration}s`, "--flow-delay": `${track.delay}s` }}
          >
            <i style={{ opacity: 0.48 + (index % 3) * 0.12 }} />
          </span>
        ))}
        {verticalTracks.map((track, index) => (
          <span
            key={`vertical-${track.at}`}
            className="ambient-track ambient-track-vertical"
            style={{ left: `${track.at}%`, "--flow-duration": `${track.duration}s`, "--flow-delay": `${track.delay}s` }}
          >
            <i style={{ opacity: 0.42 + (index % 3) * 0.12 }} />
          </span>
        ))}
      </div>
      <div className="ambient-vignette" />
    </div>
  );
}
