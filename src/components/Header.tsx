import Link from "next/link";
import { navLinks } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="main-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
