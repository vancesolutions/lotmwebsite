import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { PhoneIcon } from "@/components/icons";

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

        <Link href="#contact" className="inquire-button">
          <PhoneIcon className="button-icon" />
          Inquire Now
        </Link>
      </div>
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
