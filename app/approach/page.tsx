import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "Approach" };

export default function ApproachPage() {
  return <PageIntro label="How we build" title="Observe. Design. Engineer. Evolve." description="We understand the system, define its behavior, build the connected parts, and keep improving what works." />;
}
