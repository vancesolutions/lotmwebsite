import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero-media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/p1-img-0.png"
          alt=""
          className="hero-image"
        />
        <div className="hero-shade" />
      </div>

      <div className="hero-content">
        <h1 className="hero-logo-heading animate-fade-up">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-transparent.png"
            alt={site.name}
            width={1229}
            height={512}
            className="hero-logo"
          />
        </h1>

        <div className="hero-copy animate-fade-up-delay-1">
          <p className="hero-headline">{site.tagline}</p>
          <p className="hero-support">{site.intro}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Plan Your Event
            </a>
            <Link href="/gallery" className="btn btn-ghost">
              Photo Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
