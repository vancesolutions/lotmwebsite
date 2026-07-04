import Image from "next/image";
import { attractions } from "@/data/site";
import { MapPinIcon } from "@/components/icons";

export function AttractionsSection() {
  return (
    <section id="attractions" className="section section-light">
      <div className="container section-intro">
        <p className="section-eyebrow">The Gateway</p>
        <h2 className="section-title">Explore the Region</h2>
        <p className="section-lede">
          Light On The Mountain is your basecamp for Northern Arizona&apos;s most
          iconic destinations. The Grand Canyon, Route 66, and stunning natural
          landscapes are all just a short drive away.
        </p>
      </div>

      <div className="container attractions-grid">
        {attractions.map((attraction) => (
          <article key={attraction.title} className="attraction-card">
            <Image
              src={attraction.image}
              alt={attraction.imageAlt}
              fill
              className="attraction-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="attraction-overlay" />
            <div className="attraction-content">
              <h3 className="attraction-title">{attraction.title}</h3>
              <p className="attraction-distance">
                <MapPinIcon className="attraction-pin" />
                {attraction.distance}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
