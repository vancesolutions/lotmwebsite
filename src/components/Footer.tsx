import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">{site.shortName}</p>
        <p>
          Copyright {site.copyrightYear} · {site.name}
        </p>
      </div>
    </footer>
  );
}
