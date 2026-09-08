import type { Metadata } from "next";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/bodoni-moda/600.css";
import "@fontsource/bodoni-moda/400.css";
import "@fontsource/kalam/400.css";
import "@fontsource/ibm-plex-sans/400.css";
import "./globals.css";
import "./reconciled.css";
import "./sections-reconciled.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: {
    default: "PaperCodes | Digital Systems, Automation & Intelligent Software",
    template: "%s | PaperCodes",
  },
  description:
    "PaperCodes designs websites, customer systems, automations, AI agents and custom software for businesses that have outgrown manual work.",
  metadataBase: new URL("https://papercodes.dev"),
  openGraph: {
    title: "PaperCodes | Digital Systems, Automation & Intelligent Software",
    description:
      "Websites, workflows, agents and connected infrastructure for businesses that have outgrown manual work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PaperCodes | Digital Systems, Automation & Intelligent Software",
    description:
      "Websites, workflows, agents and connected infrastructure for businesses that have outgrown manual work.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
