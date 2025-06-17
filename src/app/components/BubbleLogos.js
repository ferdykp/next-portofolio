"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";

const radius = 180;
const logoSize = 80;

function getRandomPosition() {
  const r = Math.random() * (radius - logoSize / 2);
  const theta = Math.random() * 2 * Math.PI;
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);
  return { x, y };
}

function getRandomVelocity() {
  const speed = 0.5 + Math.random() * 1;
  const angle = Math.random() * 2 * Math.PI;
  return {
    vx: speed * Math.cos(angle),
    vy: speed * Math.sin(angle),
  };
}

export default function BubbleLogos() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const logos = useMemo(
    () => [
      { src: "/assets/html.png", alt: "HTML" },
      { src: "/assets/css.png", alt: "CSS" },
      { src: "/assets/js.png", alt: "JavaScript" },
      { src: "/assets/php.png", alt: "PHP" },
      { src: "/assets/python.png", alt: "Python" },
    ],
    []
  );

  const [positions, setPositions] = useState([]);
  const velocities = useRef([]);

  useEffect(() => {
    if (!hasMounted) return;

    // Inisialisasi posisi dan velocity setelah mounting
    setPositions(logos.map(() => getRandomPosition()));
    velocities.current = logos.map(() => getRandomVelocity());
  }, [hasMounted, logos]);

  useEffect(() => {
    if (!hasMounted || positions.length === 0) return;

    let animationFrameId;

    const animate = () => {
      setPositions((prevPositions) =>
        prevPositions.map((pos, i) => {
          let { x, y } = pos;
          let { vx, vy } = velocities.current[i];

          x += vx;
          y += vy;

          const dist = Math.sqrt(x * x + y * y);
          if (dist > radius - logoSize / 2) {
            const normalX = x / dist;
            const normalY = y / dist;
            const dot = vx * normalX + vy * normalY;
            vx = vx - 2 * dot * normalX;
            vy = vy - 2 * dot * normalY;
            velocities.current[i] = { vx, vy };
            x = normalX * (radius - logoSize / 2);
            y = normalY * (radius - logoSize / 2);
          }

          return { x, y };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasMounted, positions.length]);

  if (!hasMounted || positions.length === 0) return null;

  return (
    <div className="relative w-1000 h-80 mx-auto rounded-full overflow-hidden">
      {logos.map((logo, i) => (
        <div
          key={logo.alt}
          style={{
            position: "absolute",
            width: logoSize,
            height: logoSize,
            left: `calc(50% + ${positions[i].x}px - ${logoSize / 2}px)`,
            top: `calc(50% + ${positions[i].y}px - ${logoSize / 2}px)`,
            transition: "left 0.1s linear, top 0.1s linear",
          }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logoSize}
            height={logoSize}
          />
        </div>
      ))}
    </div>
  );
}
