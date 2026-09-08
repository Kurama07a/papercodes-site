import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return <PageIntro label="Experiment logs" title="Not case studies. Evidence." description="Real problems, real systems, and real results, documented as execution logs." />;
}
