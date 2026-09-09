import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "Start a project" };

export default function StartProjectPage() {
  return (
    <PageIntro label="Input / 001" title="Tell us what feels broken." description="Start with the friction, not a shopping list of technology. We can work out the right system from there.">
      <section className="route-section route-section--dark" aria-labelledby="intake-heading">
        <div className="route-section__heading"><p>Useful starting points</p><h2 id="intake-heading">Which part is fighting your growth?</h2></div>
        <ul className="route-columns route-columns--questions">
          <li>Leads disappear between channels and tools.</li><li>Your team copies the same information more than once.</li><li>Customer follow-up relies on someone remembering.</li><li>Your website and internal operation feel disconnected.</li><li>You need a custom tool because off-the-shelf software no longer fits.</li><li>You know the process is broken, but not yet what to build.</li>
        </ul>
        <a className="project-link project-link--light route-contact" href="mailto:hello@papercodes.dev?subject=PaperCodes%20project%20inquiry">Describe the problem <span aria-hidden="true">→</span></a>
      </section>
    </PageIntro>
  );
}
