import Image from "next/image";
import { outdoors } from "@/data/site";

export function OutdoorsSection() {
  return (
    <section id="outdoors" className="section section-light">
      <div className="container section-intro">
        <p className="section-eyebrow">The Basecamp</p>
        <h2 className="section-title">The Great Outdoors, At Your Doorstep</h2>
        <p className="section-lede">
          7,000 feet of pure Arizona high country. Open meadows, towering
          ponderosa pines, and crisp mountain air surround every corner of the
          campground.
        </p>
      </div>

      <div className="container outdoors-grid">
        {outdoors.map((item) => (
          <article key={item.title} className="outdoors-card">
            <div className="outdoors-image-wrap">
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={800}
                height={560}
                className="outdoors-image"
              />
            </div>
            <h3 className="outdoors-title">{item.title}</h3>
            <p className="outdoors-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
