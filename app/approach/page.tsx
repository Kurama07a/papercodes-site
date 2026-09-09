import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "Approach" };

export default function ApproachPage() {
  return (
    <PageIntro label="How we build / 01—04" title="Understand before automating." description="We trace how work really moves, define the behavior the system needs, build the connected parts, and improve them with evidence.">
      <section className="route-section route-section--dark" aria-labelledby="approach-heading">
        <div className="route-section__heading"><p>The operating loop</p><h2 id="approach-heading">From friction to a working system.</h2></div>
        <ol className="route-columns">
          <li><span>01</span><h3>Observe</h3><p>Interview the people doing the work and map the real flow—not the idealized process.</p></li>
          <li><span>02</span><h3>Design</h3><p>Define journeys, data, rules, responsibilities, and the outcome the system should create.</p></li>
          <li><span>03</span><h3>Engineer</h3><p>Build the interface and connect the tools, APIs, automations, and safeguards behind it.</p></li>
          <li><span>04</span><h3>Evolve</h3><p>Observe actual use, repair weak points, and extend the system as the business changes.</p></li>
        </ol>
      </section>
    </PageIntro>
  );
}
