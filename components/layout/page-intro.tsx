import Link from "next/link";

type PageIntroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageIntro({ label, title, description }: PageIntroProps) {
  return (
    <main className="route-shell" id="main-content">
      <p className="route-shell__label">{label}</p>
      <h1>{title}</h1>
      <p className="route-shell__description">{description}</p>
      <Link className="project-link project-link--dark" href="/start-project">
        Start a project <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
