import Link from "next/link";
import Image from "next/image";
import { HeroWorkflow } from "@/components/workflow/hero-workflow";
import {
  ArchitectureSection,
  ChaosSystemSection,
  EthosSection,
  EvidenceSection,
} from "@/components/sections/home-sections";
import { ToolLogo } from "@/components/ui/tool-logo";

const tools = ["Stripe", "Notion", "Make", "n8n", "OpenAI", "Supabase", "Vercel"];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__engine-art" aria-hidden="true">
          <Image className="hero__engine-photo hero__engine-photo--structure" src="/images/ethos-collage.webp" alt="" fill sizes="70vw" />
          <Image className="hero__engine-photo hero__engine-photo--documents" src="/images/chaos-collage.webp" alt="" fill sizes="35vw" />
          <Image className="hero__engine-photo hero__engine-photo--figure" src="/images/ethos-collage.webp" alt="" fill sizes="24vw" />
          <div className="hero__red-fragment">
            <Image src="/images/ethos-collage.webp" alt="" fill sizes="24vw" />
            <span>Same chaos.<br />Different system.</span>
          </div>
          <div className="hero__schematic"><i /><i /><i /><i /><b /></div>
        </div>
        <Image className="hero__collage" src="/images/hero-tear-sealed.png" alt="" fill sizes="100vw" preload />
        <div className="hero__paper-blend" aria-hidden="true" />
        <div className="hero__copy">
          <p className="margin-note" aria-hidden="true">
            Ideas<br />Processes<br />People<br />Potential
          </p>
          <h1 id="hero-title">
            <span className="hero__visible"><span>Design</span><span>what they</span><span>see.</span></span>
            <em>Automate<br />what they<br />don&apos;t.</em>
          </h1>
          <p className="hero__description">
            Websites. Workflows. Agents.<br />Custom tools. Connected systems.<br />For businesses that refuse to stay the same.
          </p>
          <div className="hero__actions">
            <Link className="project-link project-link--dark" href="/start-project">
              Start a project <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/approach">
              Our approach <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero__system">
          <HeroWorkflow />
        </div>
      </section>

      <section className="tool-band" aria-label="Tools PaperCodes builds with and connects to">
        <div className="tool-band__main">
          <p>Built with / connected to</p>
          <ul>
            {tools.map((tool) => (
              <li key={tool}><ToolLogo name={tool} /></li>
            ))}
          </ul>
        </div>
        <p className="tool-band__note">Tools are means.<br />Outcomes are the point.</p>
      </section>

      <ChaosSystemSection />
      <ArchitectureSection />
      <EvidenceSection />
      <EthosSection />
    </main>
  );
}
