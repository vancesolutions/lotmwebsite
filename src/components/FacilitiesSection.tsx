import Image from "next/image";
import { facilities } from "@/data/site";

export function FacilitiesSection() {
  return (
    <section id="facilities" className="section section-light">
      <div className="container section-intro">
        <h2 className="section-title">Purpose-Built Facilities</h2>
        <p className="section-lede">
          Everything your group needs for a meaningful retreat — from meeting
          rooms to meals to restful sleep — all nestled among the ponderosa
          pines.
        </p>
      </div>

      <div className="container facility-list">
        {facilities.map((facility) => (
          <article key={facility.id} className="facility-block">
            <div className="facility-image-wrap">
              <Image
                src={facility.image}
                alt={facility.imageAlt}
                width={1400}
                height={840}
                className="facility-image"
              />
            </div>

            <div className="facility-copy">
              {facility.stat ? (
                <div className="facility-stat">
                  <span className="facility-stat-number">{facility.stat}</span>
                  <span className="facility-stat-label">
                    {facility.statLabel}
                  </span>
                </div>
              ) : null}

              <h3 className="facility-title">{facility.title}</h3>
              <p className="facility-description">{facility.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
