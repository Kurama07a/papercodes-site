"use client";

import { motion, useInView, type TargetAndTransition, type Transition, type Variants } from "motion/react";
import { useMemo, useRef, type ComponentProps, type ElementType, type ReactNode } from "react";
import { DURATION, EASE_MARK, EASE_PRESS, EASE_STEP, STAGGER } from "./motion-tokens";

/**
 * Reveal kinds.
 *
 * `press`, `mark` and `plate` animate `clip-path` only. That is deliberate:
 * much of this page positions annotations and collage scraps with a static CSS
 * `transform: rotate(...)`, and any motion value that writes `transform` would
 * silently drop that rotation. Clip-path reveals compose with the existing
 * layout instead of fighting it.
 */
export type RevealKind = "press" | "mark" | "plate" | "rise" | "rule";

type KindSpec = {
  hidden: TargetAndTransition;
  shown: TargetAndTransition;
  transition: Transition;
};

const KINDS: Record<RevealKind, KindSpec> = {
  // Type stamped onto the plate: the reveal sweeps top to bottom, no fade.
  press: {
    hidden: { clipPath: "inset(0% 0% 101% 0%)" },
    shown: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: DURATION.plate, ease: EASE_PRESS },
  },
  // A marker stroke laid left to right across an annotation.
  mark: {
    hidden: { clipPath: "inset(0% 101% 0% 0%)" },
    shown: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: DURATION.mark, ease: EASE_MARK },
  },
  // A dark engine panel wiping in from its leading edge.
  plate: {
    hidden: { clipPath: "inset(0% 0% 0% 101%)" },
    shown: { clipPath: "inset(0% 0% 0% 0%)" },
    transition: { duration: DURATION.plate, ease: EASE_PRESS },
  },
  // Reserved for untransformed body copy and list rows. Restrained on purpose.
  rise: {
    hidden: { opacity: 0, y: 14 },
    shown: { opacity: 1, y: 0 },
    transition: { duration: DURATION.base, ease: EASE_PRESS },
  },
  // A one-pixel rule drawing into place.
  rule: {
    hidden: { scaleX: 0 },
    shown: { scaleX: 1 },
    transition: { duration: DURATION.base, ease: EASE_MARK },
  },
};

/**
 * Builds the variant pair with `delay` folded into the `shown` transition.
 *
 * It has to live there rather than on the `transition` prop: Framer resolves a
 * variant's own transition in place of the component default, so a delay
 * passed as a prop alongside a variant transition is silently discarded.
 * A group's `staggerChildren` still applies on top, because that delay is
 * supplied per value and only overridden by an explicit `delay` in the
 * variant's transition — which is why `child` reveals omit it.
 */
function useVariants(kind: RevealKind, delay: number, child: boolean): Variants {
  return useMemo(() => {
    const spec = KINDS[kind];
    return {
      hidden: spec.hidden,
      shown: {
        ...spec.shown,
        transition: child ? spec.transition : { ...spec.transition, delay },
      },
    };
  }, [kind, delay, child]);
}

/**
 * Kinds whose hidden state is a `clip-path`.
 *
 * A clipped element reports `intersectionRatio: 0`, so a `whileInView`
 * threshold expressed as an `amount` can never be met — the reveal would
 * deadlock on its own hidden state. These trigger on any intersection instead,
 * with the root's bottom edge pulled up so they still fire once the element is
 * meaningfully on screen rather than at the very bottom of the viewport.
 */
const CLIPPED_KINDS: ReadonlySet<RevealKind> = new Set(["press", "mark", "plate"]);

/** Distance above the viewport's bottom edge at which a clipped reveal fires. */
const CLIPPED_MARGIN = "0px 0px -12% 0px";

const TAGS = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  em: motion.em,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  ol: motion.ol,
  ul: motion.ul,
  details: motion.details,
  article: motion.article,
  section: motion.section,
  strong: motion.strong,
  small: motion.small,
} as const;

type Tag = keyof typeof TAGS;

/**
 * Attributes forwarded to the underlying element. Framer redefines the drag and
 * animation event props with its own signatures, so the DOM versions are
 * dropped rather than conflicting with them.
 */
type PassthroughProps = Omit<
  ComponentProps<"div">,
  | "children"
  | "style"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
>;

type RevealProps = {
  as?: Tag;
  kind?: RevealKind;
  /** Seconds to hold before starting. Ignored when `child` is set. */
  delay?: number;
  /** Fraction of the element that must be visible before it plays. */
  amount?: "some" | "all" | number;
  /**
   * Set when this element sits inside a `RevealGroup`, which owns the
   * viewport trigger and the stagger for the whole set.
   */
  child?: boolean;
  /**
   * `view` waits until the element scrolls into frame. `mount` plays straight
   * away and is for above-the-fold content, where a viewport trigger would
   * fire on the first frame anyway but stagger less predictably.
   */
  trigger?: "view" | "mount";
  children?: ReactNode;
} & PassthroughProps;

export function Reveal({
  as = "div",
  kind = "rise",
  delay = 0,
  amount = 0.35,
  child = false,
  trigger = "view",
  children,
  ...rest
}: RevealProps) {
  const Tag = TAGS[as] as typeof motion.div;
  const variants = useVariants(kind, delay, child);

  if (child) {
    return (
      <Tag data-reveal={kind} variants={variants} {...rest}>
        {children}
      </Tag>
    );
  }

  const triggerProps =
    trigger === "mount"
      ? { animate: "shown" as const }
      : {
          whileInView: "shown" as const,
          viewport: CLIPPED_KINDS.has(kind)
            ? { once: true, amount: "some" as const, margin: CLIPPED_MARGIN }
            : { once: true, amount },
        };

  return (
    <Tag data-reveal={kind} variants={variants} initial="hidden" {...triggerProps} {...rest}>
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  as?: Tag;
  /** Seconds between each child starting. */
  stagger?: number;
  delay?: number;
  amount?: "some" | "all" | number;
  trigger?: "view" | "mount";
  children?: ReactNode;
} & PassthroughProps;

/**
 * Sequences its `Reveal child` descendants. Nothing animates on the group
 * itself — it only owns the viewport trigger and the cadence, so an index or a
 * workflow reads as one run rather than several unrelated entrances.
 *
 * Variants propagate through motion components only, so every element between
 * this group and its reveals must itself be a `Reveal` or `RevealGroup`.
 */
export function RevealGroup({
  as = "div",
  stagger = STAGGER.base,
  delay = 0,
  amount = 0.2,
  trigger = "view",
  children,
  ...rest
}: RevealGroupProps) {
  const Tag = TAGS[as] as typeof motion.div;

  const triggerProps =
    trigger === "mount"
      ? { animate: "shown" as const }
      : {
          whileInView: "shown" as const,
          viewport: { once: true, amount },
        };

  return (
    <Tag
      initial="hidden"
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...triggerProps}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * A one-pixel rule that draws itself from its leading edge. Used where the
 * brief asks for gridlines to "subtly draw into place".
 */
export function RuleDraw({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      data-reveal="rule"
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: DURATION.base, ease: EASE_STEP, delay }}
      style={{ transformOrigin: "left center" }}
    />
  );
}


type InViewProps = {
  as?: ElementType;
  amount?: "some" | "all" | number;
  children?: ReactNode;
} & PassthroughProps;

/**
 * Marks its element `data-inview="true"` once it has scrolled into frame.
 *
 * This is the escape hatch for the parts of the composition that live in
 * pseudo-elements — the red rule under the transformation statement, the
 * struck underline beneath the ethos headline. Framer cannot reach `::after`,
 * so those animate in `motion.css` off this attribute instead. Put it on the
 * container and use `Reveal` for the content inside it.
 */
export function InView({ as: Tag = "div", amount = 0.4, children, ...rest }: InViewProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <Tag ref={ref} data-inview={inView ? "true" : "false"} {...rest}>
      {children}
    </Tag>
  );
}
