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
        <h1 className="hero-brand animate-fade-up">
          Light On The <em>Mountain</em>
        </h1>
        <p className="hero-headline animate-fade-up-delay-1">{site.tagline}</p>
        <p className="hero-support animate-fade-up-delay-2">{site.intro}</p>
        <div className="hero-actions animate-fade-up-delay-3">
          <a href="#contact" className="btn btn-primary">
            Plan Your Event
          </a>
          <Link href="/gallery" className="btn btn-ghost">
            Photo Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
