"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const spring = { damping: 22, stiffness: 170, mass: 0.55 };

export default function TiltSurface({
  children,
  className = "",
  maxTilt = 6,
  lift = 4,
  ...props
}) {
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, spring);
  const rotateY = useSpring(rawRotateY, spring);
  const shouldReduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    rawRotateY.set(shouldReduceMotion ? 0 : (x - 0.5) * maxTilt * 2);
    rawRotateX.set(shouldReduceMotion ? 0 : (0.5 - y) * maxTilt * 2);
    event.currentTarget.style.setProperty("--spot-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const handlePointerLeave = (event) => {
    rawRotateX.set(0);
    rawRotateY.set(0);
    event.currentTarget.style.setProperty("--spot-x", "50%");
    event.currentTarget.style.setProperty("--spot-y", "50%");
  };

  return (
    <motion.div
      {...props}
      className={`tilt-surface ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      whileHover={shouldReduceMotion ? undefined : { y: -lift, scale: 1.006 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  );
}
