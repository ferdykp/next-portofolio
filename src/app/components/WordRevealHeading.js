"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function splitWords(children) {
  return Children.map(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      return String(child)
        .split(/(\s+)/)
        .filter(Boolean)
        .map((part, index) => {
          if (/^\s+$/.test(part)) return part;
          return (
            <span className="word-reveal-clip" key={`${part}-${index}`}>
              <span className="word-reveal-word" data-word-reveal-word>
                {part}
              </span>
            </span>
          );
        });
    }

    if (isValidElement(child) && child.props.children) {
      return cloneElement(child, undefined, splitWords(child.props.children));
    }

    return child;
  });
}

export default function WordRevealHeading({ as: Tag = "h2", className = "", children, ...props }) {
  const headingRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !headingRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const words = headingRef.current.querySelectorAll("[data-word-reveal-word]");
    const context = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 112, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.72,
          ease: "power3.out",
          stagger: 0.045,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, headingRef);

    return () => context.revert();
  }, [shouldReduceMotion]);

  return (
    <Tag ref={headingRef} className={className} {...props}>
      {splitWords(children)}
    </Tag>
  );
}
