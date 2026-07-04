import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { ChevronDownIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
        alt="Snow-capped mountains and evergreen forest in Kaibab National Forest"
        fill
        priority
        className="hero-image"
        sizes="100vw"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">{site.tagline}</p>
        <h1 className="hero-title">{site.name}</h1>
        <p className="hero-location">{site.location}</p>

        <div className="hero-actions">
          <Link href="#contact" className="primary-button">
            Check Availability
          </Link>
          <Link href="#facilities" className="ghost-button">
            Explore
          </Link>
        </div>
      </div>

      <Link href="#facilities" className="scroll-indicator" aria-label="Scroll to facilities">
        <span>Scroll</span>
        <ChevronDownIcon className="scroll-icon" />
      </Link>
    </section>
  );
}
