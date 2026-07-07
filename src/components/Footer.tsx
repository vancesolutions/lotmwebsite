import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Copyright {site.copyrightYear} by {site.name}
      </p>
    </footer>
  );
}
