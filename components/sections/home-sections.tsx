import Link from "next/link";
import { InView, Reveal, RevealGroup } from "@/components/motion/reveal";
import { STAGGER } from "@/components/motion/motion-tokens";
import { capabilities } from "@/data/capabilities";
import { projectLogs } from "@/data/projects";

const architecture = [
  { index: "01", title: "Experience", detail: "Websites / Interfaces / Portals", body: "The part people use. Clear journeys, useful interfaces, and a considered experience at every touchpoint." },
  { index: "02", title: "Data", detail: "CRM / Structure / Context", body: "A shared source of truth. Customer records and business context stay connected across your tools." },
  { index: "03", title: "Automation", detail: "Workflows / Integrations / Logic", body: "The connections that keep work moving. Repeatable tasks and handoffs happen without manual copying." },
  { index: "04", title: "Intelligence", detail: "Agents / Models / Decisions", body: "Context becomes action. Agents and decision systems help your team respond with the right next step." },
];

const process = [
  { title: "Observe", body: "Understand the actual system before touching the tools." },
  { title: "Design", body: "Define the experience, data, and desired behavior." },
  { title: "Engineer", body: "Build, connect, and automate the system." },
  { title: "Evolve", body: "Measure, refine, and keep improving." },
];

const projectVisualTitles = [
  <>Every lead.<br />One clear path.</>,
  <>From interest<br />to pipeline.</>,
  <>Everything moving.<br />One place.</>,
];

export function ChaosSystemSection() {
  return (
    <section className="chaos-system" aria-labelledby="chaos-title">
      {/*
        The dossier field assembles the way a desk fills up: the note is marked
        first, then the fragments are filed one by one, then the reply lands on
        top. Every scrap is rotated in CSS, so these reveals move `clip-path`
        only and leave those transforms alone.
      */}
      <div className="chaos-system__field">
        <Reveal as="p" kind="mark" amount={0.5} className="hand-note">
          Chaos lives<br />everywhere.
        </Reveal>
        <RevealGroup
          className="fragment-list"
          aria-label="Examples of fragmented work"
          stagger={STAGGER.loose}
          delay={0.25}
          amount={0.4}
        >
          <Reveal as="span" kind="mark" child>Leads in DMs</Reveal>
          <Reveal as="span" kind="mark" child>Data in spreadsheets</Reveal>
          <Reveal as="span" kind="mark" child>Follow-ups in someone&apos;s head</Reveal>
          <Reveal as="span" kind="mark" child>Tools that don&apos;t talk</Reveal>
          <Reveal as="span" kind="mark" child>Opportunities lost</Reveal>
        </RevealGroup>
        <Reveal as="p" kind="mark" delay={0.85} amount={0.4} className="paper-note">
          It doesn&apos;t<br />have to be<br />this way.
        </Reveal>
      </div>

      {/* InView drives the red rule in `::after`, which Framer cannot reach. */}
      <InView className="chaos-system__statement" amount={0.5}>
        <Reveal as="h2" kind="press" id="chaos-title">
          We turn disconnected tools into a <em>single, intelligent system.</em>
        </Reveal>
        <Reveal as="p" kind="rise" delay={0.45}>
          Same people. Less friction. A more capable business.
        </Reveal>
      </InView>

      <div className="stack-spread">
        <RevealGroup className="architecture-stack" stagger={STAGGER.base} amount={0.35}>
          <Reveal as="p" kind="mark" child className="architecture-stack__name">
            The PaperCodes stack
          </Reveal>
          {architecture.map((layer) => (
            <Reveal as="details" kind="mark" child key={layer.index}>
              <summary><span>{layer.index}</span><strong>{layer.title}</strong><small>{layer.detail}</small><i aria-hidden="true" /></summary>
              <p>{layer.body}</p>
            </Reveal>
          ))}
        </RevealGroup>
        <Reveal as="p" kind="mark" delay={0.35} className="stack-spread__aside">
          Four<br />layers.<br />One<br />system.
        </Reveal>
      </div>
    </section>
  );
}

export function ArchitectureSection() {
  return null;
}

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="capabilities-section__heading">
        <h2 id="capabilities-title">One system.<br />Every layer.</h2>
        <p>We design the experience customers use and engineer the infrastructure that keeps work moving.</p>
      </div>

      <ol className="capability-index">
        {capabilities.map((capability) => (
          <li key={capability.index}>
            <span>{capability.index}</span>
            <h3>{capability.title}</h3>
            <p>{capability.items.join(" / ")}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function EvidenceSection() {
  return (
    <section className="evidence-section" aria-labelledby="evidence-title">
      <div className="evidence-section__intro">
        <Reveal as="h2" kind="mark" id="evidence-title" amount={0.5}>
          Concept<br /><em>logs.</em>
        </Reveal>
        <Reveal as="p" kind="rise" delay={0.2}>
          Possible builds.<br />Connected systems.<br />Ideas made concrete.
        </Reveal>
        <Link className="text-arrow" href="/work">View all logs <span aria-hidden="true">→</span></Link>
      </div>

      {/*
        Logs are dealt out in order. Their concept flows then light up on
        inspection — see the `.concept-flow` rules in motion.css. That is
        colour only; every step already reads without hovering.
      */}
      <RevealGroup className="project-logs" stagger={STAGGER.loose} amount={0.2}>
        {projectLogs.map((project, index) => (
          <Reveal as="article" kind="rise" child className="project-log" key={project.id}>
            <div className="project-log__meta">
              <span>{project.id}</span>
              <strong>{project.status}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.engine}</p>
            <div className={`project-log__plate project-log__plate--${project.id.toLowerCase()}`} aria-label={`Proposed flow for ${project.title}`}>
              <small>Proposed system</small>
              <strong className="project-log__visual-title">{projectVisualTitles[index]}</strong>
              <ol className="concept-flow">
                {[["Storefront", "Customer context", "CRM + email"], ["Lead capture", "Enrich + route", "Sales team"], ["Client portal", "Agent + workflow", "Operations"]][index].map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
            <dl>
              <div><dt>Surface</dt><dd>{project.experience}</dd></div>
              <div><dt>Connected layers</dt><dd>{project.category}</dd></div>
            </dl>
            <small className="project-log__disclaimer">Concept exploration, not a client result</small>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}

export function ExperienceEngineSection() {
  const engineSteps = ["Validate", "Enrich", "Score", "Route", "CRM", "Agent", "Follow-up"];

  return (
    <section className="experience-engine" aria-labelledby="experience-engine-title">
      <div className="experience-engine__heading">
        <h2 id="experience-engine-title">What they see.<br />What makes it work.</h2>
        <p>One customer action can set an entire operating system in motion.</p>
      </div>

      <div className="experience-engine__demo">
        <article className="surface-demo">
          <p>The experience</p>
          <div>
            <h3>Tell us what you&apos;re building.</h3>
            <p>A clear form. One useful confirmation. No visible complexity.</p>
            <span className="surface-demo__event">Event: inquiry submitted</span>
          </div>
        </article>

        <article className="engine-demo">
          <p>The engine</p>
          <ol>
            {engineSteps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>
            ))}
          </ol>
          <strong>Follow-up ready</strong>
        </article>
      </div>
    </section>
  );
}

export function EthosSection() {
  return (
    <section className="ethos-section" aria-labelledby="ethos-title">
      <div className="ethos-section__dark ethos-section__dark--left">
        <Reveal as="p" kind="mark" className="hand-note hand-note--light" amount={0.5}>
          Same spirit.<br />Different form.
        </Reveal>
        <RevealGroup as="ul" stagger={STAGGER.tight} delay={0.3} amount={0.4}>
          <Reveal as="li" kind="mark" child>Challenge</Reveal>
          <Reveal as="li" kind="mark" child>Reinvent</Reveal>
          <Reveal as="li" kind="mark" child>Fuse</Reveal>
          <Reveal as="li" kind="mark" child>Iterate</Reveal>
          <Reveal as="li" kind="mark" child>Stay curious</Reveal>
          <Reveal as="li" kind="mark" child>Keep going</Reveal>
        </RevealGroup>
      </div>

      {/* InView drives the struck red underline the headline carries in `::after`. */}
      <InView className="ethos-section__paper" amount={0.45}>
        <Reveal as="h2" kind="press" id="ethos-title">
          Built to<br />evolve.
        </Reveal>
        <Reveal as="p" kind="rise" delay={0.35}>
          We don&apos;t believe in one-size-fits-all systems. Every business is different. So is every build. We question defaults, adapt quickly, and keep rebuilding what can be better.
        </Reveal>
        <Link className="project-link" href="/approach">Our approach <span aria-hidden="true">→</span></Link>
      </InView>

      <div className="ethos-section__dark ethos-section__dark--right">
        <Reveal as="p" kind="mark" amount={0.4}>
          Today, a website.<br />Tomorrow, an agent.<br />Next, something without a category yet.
        </Reveal>
        <Reveal as="strong" kind="mark" delay={0.3} amount={0.4}>
          Better systems for a brighter tomorrow.
        </Reveal>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="process-section" aria-labelledby="process-title">
      <h2 id="process-title">How we build.</h2>
      <ol className="process-loop">
        {process.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
      <p className="process-loop__return">Measure. Learn. Return.</p>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <p className="closing-section__status">System ready<br />Waiting for input_</p>
      <h2 id="closing-title">Your team should not be doing the work of a script.</h2>
      <p>Let&apos;s build the machine.</p>
      <Link className="project-link project-link--light" href="/start-project">Initialize project <span aria-hidden="true">→</span></Link>
    </section>
  );
}
