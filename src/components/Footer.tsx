import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Copyright {new Date().getFullYear()} by {site.name}
      </p>
    </footer>
  );
}
