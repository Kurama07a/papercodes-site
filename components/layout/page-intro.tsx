import Link from "next/link";
import type { ReactNode } from "react";

type PageIntroProps = {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
  compact?: boolean;
};

export function PageIntro({ label, title, description, children, compact = false }: PageIntroProps) {
  return (
    <main className="route-shell" id="main-content">
      <header className={`route-shell__intro${compact ? " route-shell__intro--compact" : ""}`}>
        <p className="route-shell__label">{label}</p>
        <h1>{title}</h1>
        <p className="route-shell__description">{description}</p>
        <Link className="project-link project-link--dark" href="/start-project">
          Start a project <span aria-hidden="true">→</span>
        </Link>
      </header>
      {children}
    </main>
  );
}
