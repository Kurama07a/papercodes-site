"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { DURATION, EASE_PRESS } from "./motion-tokens";

/**
 * Global motion configuration.
 *
 * `reducedMotion="user"` drops transform and layout animations for anyone who
 * has asked for less motion. It does not cover `clip-path`, which most reveals
 * on this site use, so `motion.css` neutralises those under the same media
 * query — that also fixes them from first paint rather than after hydration.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: DURATION.base, ease: EASE_PRESS }}
    >
      {children}
    </MotionConfig>
  );
}
