import Link from "next/link";
import Image from "next/image";
import { HeroWorkflow } from "@/components/workflow/hero-workflow";
import {
  ArchitectureSection,
  ChaosSystemSection,
  EthosSection,
  EvidenceSection,
} from "@/components/sections/home-sections";
import { HeroArt } from "@/components/motion/hero-art";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { ToolLogo } from "@/components/ui/tool-logo";

const tools = ["Stripe", "Notion", "Make", "n8n", "OpenAI", "Supabase", "Vercel"];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <HeroArt>
          <Image className="hero__engine-photo hero__engine-photo--structure" src="/images/ethos-collage.webp" alt="" fill sizes="70vw" />
          <Image className="hero__engine-photo hero__engine-photo--documents" src="/images/chaos-collage.webp" alt="" fill sizes="35vw" />
          <Image className="hero__engine-photo hero__engine-photo--figure" src="/images/ethos-collage.webp" alt="" fill sizes="24vw" />
          <div className="hero__red-fragment">
            <Image src="/images/ethos-collage.webp" alt="" fill sizes="24vw" />
            <span>Same chaos.<br />Different system.</span>
          </div>
          <div className="hero__schematic"><i /><i /><i /><i /><b /></div>
        </HeroArt>
        <Image className="hero__collage" src="/images/hero-tear-sealed.png" alt="" fill sizes="100vw" preload />
        <div className="hero__paper-blend" aria-hidden="true" />
        <div className="hero__copy">
          {/*
            The proposition is stamped on line by line rather than faded in:
            each line's clip sweeps top to bottom, so the headline reads as
            type meeting paper.
          */}
          <Reveal as="p" kind="mark" trigger="mount" delay={0.62} className="margin-note" aria-hidden="true">
            Ideas<br />Processes<br />People<br />Potential
          </Reveal>
          <h1 id="hero-title">
            <span className="hero__visible">
              <Reveal as="span" kind="press" trigger="mount" delay={0.05}>Design</Reveal>
              <Reveal as="span" kind="press" trigger="mount" delay={0.14}>what they</Reveal>
              <Reveal as="span" kind="press" trigger="mount" delay={0.23}>see.</Reveal>
            </span>
            <em>
              <Reveal as="span" kind="press" trigger="mount" delay={0.36}>Automate</Reveal>
              <Reveal as="span" kind="press" trigger="mount" delay={0.43}>what they</Reveal>
              <Reveal as="span" kind="press" trigger="mount" delay={0.5}>don&apos;t.</Reveal>
            </em>
          </h1>
          <Reveal as="p" kind="rise" trigger="mount" delay={0.66} className="hero__description">
            Websites. Workflows. Agents.<br />Custom tools. Connected systems.<br />For businesses that refuse to stay the same.
          </Reveal>
          <Reveal kind="rise" trigger="mount" delay={0.76} className="hero__actions">
            <Link className="project-link project-link--dark" href="/start-project">
              Start a project <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/approach">
              Our approach <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="hero__system">
          <HeroWorkflow />
        </div>
      </section>

      <section className="tool-band" aria-label="Tools PaperCodes builds with and connects to">
        <div className="tool-band__main">
          <Reveal as="p" kind="mark">Built with / connected to</Reveal>
          <RevealGroup as="ul" stagger={0.05} amount={0.5}>
            {tools.map((tool) => (
              <Reveal as="li" kind="rise" child key={tool}><ToolLogo name={tool} /></Reveal>
            ))}
          </RevealGroup>
        </div>
        <Reveal as="p" kind="mark" delay={0.2} className="tool-band__note">Tools are means.<br />Outcomes are the point.</Reveal>
      </section>

      <ChaosSystemSection />
      <ArchitectureSection />
      <EvidenceSection />
      <EthosSection />
    </main>
  );
}
