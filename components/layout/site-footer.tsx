import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="footer-mark" href="/">
          PaperCodes
        </Link>
        <p className="footer-loop">Design / Automate / Build / Repeat</p>
        <p className="footer-legal">© {new Date().getFullYear()} PaperCodes. All systems go.</p>
      </div>
    </footer>
  );
}
