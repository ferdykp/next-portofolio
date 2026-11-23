"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionDirector() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let media;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (cancelled) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const context = gsap.context(() => {
          gsap.fromTo(
            ".hero-masthead p",
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, stagger: 0.09, ease: "power2.out", clearProps: "all" },
          );
          gsap.fromTo(
            ".hero-title > span",
            { yPercent: 105, clipPath: "inset(0 0 100% 0)" },
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.9, stagger: 0.12, ease: "power4.out", clearProps: "all" },
          );
          gsap.fromTo(
            ".hero-portrait",
            { clipPath: "inset(12% 0 88% 0)" },
            { clipPath: "inset(0 0 0 0)", duration: 1.1, delay: 0.2, ease: "power3.inOut", clearProps: "clipPath" },
          );
          gsap.fromTo(
            ".hero-description, .hero-scroll",
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, delay: 0.45, stagger: 0.08, ease: "power2.out", clearProps: "all" },
          );

          const reveal = (selector, from, to, triggerSelector = selector, stagger = 0) => {
            const elements = gsap.utils.toArray(selector);
            if (!elements.length) return;

            gsap.fromTo(elements, from, {
              ...to,
              stagger,
              scrollTrigger: {
                trigger: triggerSelector,
                start: "top 82%",
                once: true,
              },
            });
          };

          reveal(".work-heading", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, ".work-section");
          reveal(".work-preview", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0 0)", duration: 0.9, ease: "power3.inOut", clearProps: "clipPath" }, ".work-preview");
          reveal(".work-row", { x: -18, opacity: 0 }, { x: 0, opacity: 1, duration: 0.48, ease: "power2.out" }, ".work-list", 0.035);
          reveal(".about-content h2", { clipPath: "inset(0 0 100% 0)", y: 20 }, { clipPath: "inset(0 0 0 0)", y: 0, duration: 0.8, ease: "power3.out", clearProps: "all" }, ".about-section");
          reveal(".about-copy, .about-education", { x: 16, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, ".about-bottom", 0.09);
          reveal(".experience-row", { x: -14, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, ".experience-content", 0.055);
          reveal(".notes-content > h2", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0 0)", duration: 0.75, ease: "power3.out", clearProps: "clipPath" }, ".notes-section");
          reveal(".note-row", { x: -12, opacity: 0 }, { x: 0, opacity: 1, duration: 0.42, ease: "power2.out" }, ".notes-list", 0.045);
          reveal(".contact-intro, .contact-form", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, ".contact-section", 0.1);

          gsap.utils.toArray(".reveal-media").forEach((mediaElement) => {
            gsap.fromTo(
              mediaElement,
              { clipPath: "inset(0 0 100% 0)" },
              {
                clipPath: "inset(0 0 0 0)",
                duration: 0.85,
                ease: "power3.inOut",
                clearProps: "clipPath",
                scrollTrigger: { trigger: mediaElement, start: "top 82%", once: true },
              },
            );
          });

          reveal(".case-category", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, ".case-heading");
          reveal(".case-heading h1", { clipPath: "inset(0 0 100% 0)", y: 24 }, { clipPath: "inset(0 0 0 0)", y: 0, duration: 0.85, ease: "power3.out", clearProps: "all" }, ".case-heading");
          reveal(".case-deck", { x: 18, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, ".case-heading");
          reveal(".case-facts > div", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, ".case-facts", 0.08);
          reveal(".case-next > a", { x: -16, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, ".case-next");
        });
        return () => context.revert();
      });
    });

    return () => {
      cancelled = true;
      media?.revert();
    };
  }, [pathname]);

  return null;
}
