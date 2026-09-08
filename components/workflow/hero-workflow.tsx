"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { EXECUTION, STAGGER } from "@/components/motion/motion-tokens";
import { Reveal, RevealGroup } from "@/components/motion/reveal";

const stages = [
  {
    title: "Input",
    items: ["Form", "Message", "Call", "API", "Manual task"],
  },
  {
    title: "Enrich",
    items: ["Clean", "Validate", "Contextualize"],
  },
  {
    title: "Automate",
    items: ["Route", "Trigger", "Update", "Notify"],
  },
  {
    title: "Intelligence",
    items: ["Score", "Assign", "Respond", "Learn"],
  },
];

/** Stage index while the signal rests between runs. */
const IDLE = -1;

/**
 * Drives the execution signal through the four stages, then rests and repeats.
 *
 * The workflow is real content and reads correctly with the signal parked, so
 * nothing here is load-bearing: the sequence stops entirely for reduced-motion
 * users and while the engine is off screen.
 */
function useExecutionSignal(enabled: boolean) {
  const [active, setActive] = useState(IDLE);

  useEffect(() => {
    if (!enabled) return;

    let index = IDLE;
    let timer: ReturnType<typeof setTimeout>;

    // One pass through the stages, then a rest at IDLE, then repeat.
    const tick = () => {
      index = index >= stages.length - 1 ? IDLE : index + 1;
      setActive(index);
      timer = setTimeout(tick, index === IDLE ? EXECUTION.rest : EXECUTION.dwell);
    };

    // Clear any stage still lit from a previous run, then let the engine
    // settle into view before the signal enters it.
    const reset = setTimeout(() => setActive(IDLE), 0);
    timer = setTimeout(tick, 500);

    return () => {
      clearTimeout(reset);
      clearTimeout(timer);
    };
  }, [enabled]);

  // Derived rather than reset in the effect body: off screen or reduced
  // motion, the engine simply shows no signal at all.
  return enabled ? active : IDLE;
}

export function HeroWorkflow() {
  // The signal only runs while the engine is actually on screen. The ref sits
  // on the plain container rather than the workflow list so it stays a normal
  // element ref, independent of the reveal components inside it.
  const engineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(engineRef, { amount: 0.35 });
  const reduced = useReducedMotion();
  const active = useExecutionSignal(inView && !reduced);

  return (
    <div className="hero-engine" ref={engineRef} aria-label="A four-stage customer workflow">
      <Reveal as="p" kind="mark" trigger="mount" delay={0.85} className="engine-note">
        {"// Behind every experience"}
        <br />
        {"// is a system"}
      </Reveal>
      {/* The four stages are placed left to right, the order the signal runs. */}
      <RevealGroup
        as="ol"
        className="workflow"
        trigger="mount"
        stagger={STAGGER.loose}
        delay={0.3}
      >
        {stages.map((stage, index) => (
          <Reveal
            as="li"
            kind="plate"
            child
            className="workflow__stage"
            key={stage.title}
            /*
             * `done` fills the connector leaving the stage, `active` lights the
             * stage itself. Presentation only — see motion.css.
             */
            data-state={
              active === IDLE ? "idle" : index < active ? "done" : index === active ? "active" : "idle"
            }
          >
            <div className="workflow__heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{stage.title}</h2>
            </div>
            <ul>
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </RevealGroup>
      <Reveal as="p" kind="mark" trigger="mount" delay={1} className="engine-outcome">
        Less manual work.<br />More meaningful work.
      </Reveal>
      <Reveal as="p" kind="mark" trigger="mount" delay={1.15} className="engine-annotation">
        From fragmented<br />to freedom.
      </Reveal>
    </div>
  );
}
