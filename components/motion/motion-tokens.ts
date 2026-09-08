/**
 * Motion tokens for PaperCodes.
 *
 * The brief calls for motion that reads as machinery: precise, mechanical,
 * slightly raw. No springs, no overshoot, no bounce — every curve below
 * decelerates hard and stops. Durations stay short enough that the page still
 * feels static at rest, which is the Stage 2 promise the motion stage extends
 * rather than replaces.
 */

/** Sharp decelerate. The default for reveals that should land, not float. */
export const EASE_PRESS = [0.16, 0.84, 0.24, 1] as const;

/** Near-linear with a clipped tail. Used for marker strokes and rule draws. */
export const EASE_MARK = [0.33, 0, 0.12, 1] as const;

/** Symmetric machine step. Used for state changes inside the engine. */
export const EASE_STEP = [0.4, 0, 0.2, 1] as const;

export const DURATION = {
  /** Interface state changes: hover, press, focus. */
  tick: 0.18,
  /** Annotation strokes — fast, as if marked by hand. */
  mark: 0.36,
  /** The default reveal. */
  base: 0.52,
  /** Monumental type and full plates. */
  plate: 0.72,
} as const;

/** Gap between siblings in a sequenced group. */
export const STAGGER = {
  tight: 0.045,
  base: 0.075,
  loose: 0.11,
} as const;

/** Engine execution cadence: how long the signal dwells in one workflow stage. */
export const EXECUTION = {
  dwell: 1150,
  /** Pause after the signal clears the last stage, before the cycle repeats. */
  rest: 2200,
} as const;
