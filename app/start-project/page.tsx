import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "Start a project" };

export default function StartProjectPage() {
  return <PageIntro label="Input / 001" title="Tell us what feels broken." description="The full accessible project intake flow arrives in a later implementation phase. For now, the route and content hierarchy are established." />;
}
