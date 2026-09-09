import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageIntro label="About PaperCodes" title="Built around the way work actually happens." description="PaperCodes is a digital systems studio working across experience design, software, automation, and applied intelligence.">
      <section className="route-section" aria-labelledby="about-heading">
        <div className="route-section__heading"><p>Why this studio exists</p><h2 id="about-heading">Growing companies rarely have a tool problem.</h2></div>
        <div className="route-prose"><p>They have a connection problem. The website does not inform sales. Customer context is split between inboxes, spreadsheets, and a CRM. Follow-up depends on memory. New software adds another place to check.</p><p>PaperCodes treats those fragments as one design problem. We work from the customer-facing experience through the data and operational layers beneath it, so the result is easier for customers to use and easier for the team to operate.</p><p>You work directly with the people designing and building the system. Decisions stay close to the problem, and every technical choice has to earn its place.</p></div>
      </section>
    </PageIntro>
  );
}
