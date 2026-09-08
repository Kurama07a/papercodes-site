import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "Project log" };

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return <PageIntro label="Project log" title={title} description="The project log system is scaffolded and ready for structured evidence data in the next implementation phase." />;
}
