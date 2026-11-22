"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const SmoothScrollContext = createContext(null);

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const instance = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: 0.15,
      wheelMultiplier: 1.05,
      anchors: true,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const tick = (time) => instance.raf(time * 1000);
    const syncBodyLock = () => {
      if (document.body.style.overflow === "hidden") instance.stop();
      else instance.start();
    };
    const bodyObserver = new MutationObserver(syncBodyLock);

    instance.on("scroll", updateScrollTrigger);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    syncBodyLock();
    setLenis(instance);

    return () => {
      bodyObserver.disconnect();
      gsap.ticker.remove(tick);
      instance.off("scroll", updateScrollTrigger);
      instance.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
