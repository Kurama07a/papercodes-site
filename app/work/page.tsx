import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import Link from "next/link";
import { projectLogs } from "@/data/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <PageIntro label="Proof of work / 001—002" title="Systems that reached the real world." description="Two operational products, documented through live deployments and repository-level engineering evidence.">
      <section className="route-section route-section--dark" aria-labelledby="logs-heading">
        <div className="route-section__heading"><p>Proof of work</p><h2 id="logs-heading">The interface and the machinery behind it.</h2></div>
        <div className="route-index">
          {projectLogs.map((project) => (
            <article key={project.id}>
              <span>{project.id} / {project.status}</span>
              <h3>{project.title}</h3>
              <p><strong>Problem</strong>{project.problem}</p>
              <p><strong>Outcome</strong>{project.outcome}</p>
              <Link href={`/work/${project.slug}`}>Open project record <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
    </PageIntro>
  );
}
