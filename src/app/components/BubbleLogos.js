"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";

// Fungsi random posisi dalam lingkaran
function getRandomPosition(radius, logoSize) {
  const r = Math.random() * (radius - logoSize / 2);
  const theta = Math.random() * 2 * Math.PI;
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);
  return { x, y };
}

// Fungsi random arah gerak
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
  const [dimensions, setDimensions] = useState({
    size: 400,
    logoSize: 80,
    radius: 200,
  });

  useEffect(() => {
    setHasMounted(true);

    const updateSize = () => {
      const isMobile = window.innerWidth < 768;
      const size = isMobile ? 250 : 400;
      const logoSize = isMobile ? 40 : 80;
      setDimensions({ size, logoSize, radius: size / 2 });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
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

    // Inisialisasi posisi & kecepatan
    setPositions(
      logos.map(() => getRandomPosition(dimensions.radius, dimensions.logoSize))
    );
    velocities.current = logos.map(() => getRandomVelocity());
  }, [hasMounted, logos, dimensions]);

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
          if (dist > dimensions.radius - dimensions.logoSize / 2) {
            const normalX = x / dist;
            const normalY = y / dist;
            const dot = vx * normalX + vy * normalY;
            vx = vx - 2 * dot * normalX;
            vy = vy - 2 * dot * normalY;
            velocities.current[i] = { vx, vy };
            x = normalX * (dimensions.radius - dimensions.logoSize / 2);
            y = normalY * (dimensions.radius - dimensions.logoSize / 2);
          }

          return { x, y };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasMounted, positions.length, dimensions]);

  if (!hasMounted || positions.length === 0) return null;

  return (
    <div
      className="relative mx-auto rounded-full overflow-hidden"
      style={{
        width: `${dimensions.size}px`,
        height: `${dimensions.size}px`,
      }}
    >
      {logos.map((logo, i) => (
        <div
          key={logo.alt}
          style={{
            position: "absolute",
            width: `${dimensions.logoSize}px`,
            height: `${dimensions.logoSize}px`,
            left: `calc(50% + ${positions[i].x}px - ${
              dimensions.logoSize / 2
            }px)`,
            top: `calc(50% + ${positions[i].y}px - ${
              dimensions.logoSize / 2
            }px)`,
            transition: "left 0.1s linear, top 0.1s linear",
          }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={dimensions.logoSize}
            height={dimensions.logoSize}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
