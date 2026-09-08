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
import "./motion.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";

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
    /*
     * `data-scroll-behavior="smooth"` is required in Next 16 for the router to
     * keep overriding the global `scroll-behavior: smooth` during navigation.
     * Without it, every route change animates a full-page scroll to the top.
     */
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/*
         * Runs synchronously before first paint. Every reveal's hidden state is
         * scoped to `[data-js="on"]`, so with JavaScript unavailable the page
         * renders complete and static instead of holding content invisible.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute("data-js","on")`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
