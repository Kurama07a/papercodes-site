import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

type PageIntroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageIntro({ label, title, description }: PageIntroProps) {
  return (
    <main className="route-shell" id="main-content">
      <Reveal as="p" kind="mark" trigger="mount" delay={0.35} className="route-shell__label">
        {label}
      </Reveal>
      <Reveal as="h1" kind="press" trigger="mount" delay={0.05}>
        {title}
      </Reveal>
      <Reveal as="p" kind="rise" trigger="mount" delay={0.22} className="route-shell__description">
        {description}
      </Reveal>
      <Link className="project-link project-link--dark" href="/start-project">
        Start a project <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
