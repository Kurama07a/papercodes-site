import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return <PageIntro label="Capabilities" title="Experience to intelligence." description="Websites, customer systems, automation, agents, and the custom software between them." />;
}
