"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Wraps the hero collage plane and publishes a single scroll-linked drift
 * value as a CSS custom property.
 *
 * The layers underneath already carry static `transform: rotate(...)` from the
 * art direction, so motion.css consumes `--pc-drift` through the separate
 * `translate` property instead. `translate` composes with `transform` rather
 * than replacing it, which keeps every rotation intact.
 *
 * Travel is held to the 4–12px the brief allows: enough to separate the plane
 * from the paper, not enough to read as parallax for its own sake.
 */
export function HeroArt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <motion.div
      ref={ref}
      className="hero__engine-art"
      aria-hidden="true"
      style={{ "--pc-drift": drift } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}
