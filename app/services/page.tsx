import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { capabilities } from "@/data/capabilities";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PageIntro label="Capabilities / 01—05" title="One system. Every layer." description="We design what customers use and engineer the connected infrastructure that keeps your team moving.">
      <section className="route-section" aria-labelledby="services-heading">
        <div className="route-section__heading"><p>What we build</p><h2 id="services-heading">Start with the operational problem.</h2></div>
        <ol className="route-index">
          {capabilities.map((item) => <li key={item.index}><span>{item.index}</span><h3>{item.title}</h3><p>{item.items.join(" / ")}</p></li>)}
        </ol>
      </section>
      <section className="route-section route-section--dark" aria-labelledby="engagements-heading">
        <div className="route-section__heading"><p>Ways to work together</p><h2 id="engagements-heading">A useful first boundary.</h2></div>
        <div className="route-columns">
          <article><span>01</span><h3>System audit</h3><p>Map the current journey, tools, handoffs, data, and failure points. Leave with priorities and a build plan.</p></article>
          <article><span>02</span><h3>Focused build</h3><p>Design and ship one connected experience, workflow, internal tool, or automation with a defined outcome.</p></article>
          <article><span>03</span><h3>System partnership</h3><p>Improve a changing operation across experience, data, automation, and intelligence over time.</p></article>
        </div>
      </section>
    </PageIntro>
  );
}
