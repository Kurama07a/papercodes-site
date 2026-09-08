import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <PageIntro label="Same spirit. Different form." title="Built to evolve." description="PaperCodes combines disciplines, questions defaults, and builds each system around the business it serves." />;
}
