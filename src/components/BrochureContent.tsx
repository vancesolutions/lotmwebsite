import { activities, amenities, attractions, site } from "@/data/site";
import Link from "next/link";

function BrochureList({
  heading,
  items,
}: {
  heading: string;
  items: readonly string[];
}) {
  return (
    <section className="brochure-block">
      <h2 className="brochure-heading">{heading}</h2>
      <ul className="brochure-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function BrochureContent() {
  return (
    <div className="brochure-content">
      <p className="brochure-intro">{site.intro}</p>

      <BrochureList heading="Activities" items={activities} />

      <BrochureList heading="Our Amenities Include:" items={amenities} />

      <BrochureList
        heading="Access to Many Local Attractions:"
        items={attractions}
      />

      <div className="gallery-link-wrap">
        <Link href="/gallery" className="gallery-link">
          Photo Gallery
        </Link>
      </div>
    </div>
  );
}
