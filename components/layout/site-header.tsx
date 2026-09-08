import Link from "next/link";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
];

function NavigationLinks() {
  return (
    <>
      {navigation.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" href="/" aria-label="PaperCodes home">
          <span>PaperCodes</span>
          <small>Systems for what&apos;s next.</small>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavigationLinks />
        </nav>

        <Link className="project-link desktop-project-link" href="/start-project">
          Start a project <span aria-hidden="true">→</span>
        </Link>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-nav__panel">
            <div className="mobile-nav__links">
              <NavigationLinks />
            </div>
            <Link className="project-link" href="/start-project">
              Start a project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
