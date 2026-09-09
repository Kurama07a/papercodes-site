import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/page-intro";
import { projectLogs } from "@/data/projects";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectLogs.find((item) => item.slug === slug);

  return project
    ? { title: `${project.title} — Proof of work`, description: project.summary }
    : { title: "Project record" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectLogs.find((item) => item.slug === slug);
  if (!project) notFound();

  if (project.slug === "ctrlp-printing-network") {
    return (
      <main className="case-study" id="main-content">
        <header className="case-hero">
          <div className="case-hero__copy">
            <p className="case-label">{project.id} / distributed printing / shipped</p>
            <h1>From file upload<br />to a physical printer.</h1>
            <p className="case-hero__lede">CtrlP connected a student-facing ordering flow to shop discovery, payment, realtime job routing, shop-side software, and the printer itself.</p>
            <a className="project-link project-link--dark" href={project.externalUrl} target="_blank" rel="noreferrer">View published overview <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="case-hero__artifact">
            {/* The frame is far taller than it is wide, so `cover` scales the source by its
                height, not its width. Asking for the column width alone got a 792px file
                blown up 1.9x; these values request enough source to fill the crop. */}
            <Image className="case-hero__photo" src="/images/ctrlp-printshop-documentary-v2.png" alt="An operator handling printed sheets beside a production printer" fill sizes="(max-width: 900px) 210vw, 120vw" priority />
            <Image className="case-hero__tear" src="/images/torn-divider.png" alt="" fill sizes="12rem" priority aria-hidden="true" />
            <figcaption>Print shop operations / documentary reconstruction</figcaption>
          </figure>
        </header>

        <section className="case-problem" aria-labelledby="ctrlp-problem">
          <div><p className="case-label">The operating problem</p><h2 id="ctrlp-problem">Printing was a conversation, a queue, and a manual handoff.</h2></div>
          <div className="case-problem__copy">
            <p>Students sent files through WhatsApp, email, Telegram, or pen drives. Shop staff downloaded them, clarified preferences, collected payment, queued the work, and operated the printer.</p>
            <p>The difficulty was not the print command. It was coordinating files, preferences, payment, shop capacity, job state, and physical output across two sides of a local marketplace.</p>
          </div>
        </section>

        <section className="case-flow" aria-labelledby="ctrlp-flow">
          <div className="case-flow__before"><p className="case-label">Before</p><ol><li>Send file</li><li>Explain settings</li><li>Wait in queue</li><li>Pay</li><li>Collect print</li></ol></div>
          <div className="case-flow__after"><p className="case-label">Connected system</p><h2 id="ctrlp-flow">One job. Seven coordinated states.</h2><ol><li><span>01</span>Upload</li><li><span>02</span>Normalize to PDF</li><li><span>03</span>Find nearby shop</li><li><span>04</span>Choose preferences</li><li><span>05</span>Pay</li><li><span>06</span>Push job in realtime</li><li><span>07</span>Print</li></ol></div>
        </section>

        <section className="case-architecture" aria-labelledby="ctrlp-architecture">
          <div className="case-architecture__heading"><p className="case-label">System architecture</p><h2 id="ctrlp-architecture">Software crossing the screen boundary.</h2><p>The delivery unit was not one application. It was a chain spanning web, backend services, realtime infrastructure, shop software, and hardware.</p></div>
          <div className="case-system-map" role="img" aria-label="Student web experience connects through Node APIs, Redis and WebSockets to an Electron shop client and a physical printer">
            <div><span>Experience</span><strong>Student web app</strong><small>Upload / settings / payment</small></div>
            <i aria-hidden="true">→</i>
            <div><span>Core</span><strong>Node.js APIs</strong><small>Jobs / shops / pricing / validation</small></div>
            <i aria-hidden="true">→</i>
            <div><span>Realtime</span><strong>Redis + WebSockets</strong><small>Routing / state / delivery</small></div>
            <i aria-hidden="true">→</i>
            <div><span>Edge</span><strong>Electron shop client</strong><small>Queue / printer control / status</small></div>
            <i aria-hidden="true">→</i>
            <div><span>Output</span><strong>Physical printer</strong><small>Automated job execution</small></div>
          </div>
        </section>

        <section className="case-contribution" aria-labelledby="ctrlp-contribution">
          <div className="case-contribution__heading"><p className="case-label">My role</p><h2 id="ctrlp-contribution">Building the machinery behind the print flow.</h2><p>CtrlP was a collaborative product. My work concentrated on the operational path between the customer order, the backend, the shop, and the printer.</p></div>
          <dl>
            <div><dt>Backend and realtime</dt><dd>Designed job, shop, pricing, and status services with validation, caching, and WebSocket coordination.</dd></div>
            <div><dt>Customer flow</dt><dd>Connected ordering, document submission, payment, shop selection, and order-state updates.</dd></div>
            <div><dt>Shop operations</dt><dd>Built registration, KYC, payout, settings, and administration workflows for print-shop operators.</dd></div>
            <div><dt>Printer edge</dt><dd>Developed the Electron dashboard layer responsible for queues, printer control, metrics, and realtime status.</dd></div>
          </dl>
        </section>

        <section className="case-evidence" aria-labelledby="ctrlp-evidence">
          <div><p className="case-label">What shipped</p><h2 id="ctrlp-evidence">Operational features, not a stack inventory.</h2></div>
          <ul>
            <li>Realtime job coordination and status processing through WebSockets.</li>
            <li>Redis-backed cache behavior and job-state utilities.</li>
            <li>Payment and payout handling, including a unified payment/job-processing route.</li>
            <li>Print-shop registration, KYC, bank and UPI details, and shop administration.</li>
            <li>Shop-side Electron software for queues, printer control, metrics, and status.</li>
            <li>Successive architecture generations across web, services, desktop, and device experiments.</li>
          </ul>
        </section>

        <section className="case-verdict" aria-labelledby="ctrlp-verdict">
          <div><p className="case-label">Outcome</p><h2 id="ctrlp-verdict">A shorter path from intent to output.</h2><p>The published project overview reports reducing the student printing flow from 15–30 minutes to roughly 3–5 minutes by replacing the queue of manual handoffs with one connected ordering and printing system.</p></div>
        </section>
      </main>
    );
  }

  return (
    <PageIntro compact label={`${project.id} / ${project.status}`} title={project.title} description={project.problem}>
      <section className="route-section route-section--dark" aria-labelledby="log-system-heading">
        <div className="route-section__heading"><p>System record</p><h2 id="log-system-heading">What shipped—and what verifies it.</h2></div>
        <dl className="route-facts">
          <div><dt>Customer-facing surface</dt><dd>{project.experience}</dd></div>
          <div><dt>Connected system</dt><dd>{project.engine}</dd></div>
          <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
          <div><dt>Evidence</dt><dd>{project.evidence}</dd></div>
        </dl>
        <a className="project-link project-link--light route-contact" href={project.externalUrl} target="_blank" rel="noreferrer">View live project <span aria-hidden="true">↗</span></a>
      </section>
      <figure className="project-proof">
        <Image src={project.image} alt={`${project.title} live product interface`} width={1440} height={1000} sizes="100vw" priority />
        <figcaption>Live product capture / verified September 2026</figcaption>
      </figure>
    </PageIntro>
  );
}
