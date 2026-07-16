import Link from "next/link";
import {
  activities,
  amenities,
  attractions,
  featuredGallery,
  site,
} from "@/data/site";

export function BrochureContent() {
  return (
    <>
      <section className="section intro-section" aria-labelledby="about-title">
        <div className="shell intro-grid">
          <div className="intro-copy">
            <p className="section-label">About the campground</p>
            <h2 id="about-title" className="section-title">
              Faith, fellowship, and forest quiet
            </h2>
            <p>
              Light On The Mountain Campground welcomes retreats, youth groups,
              conferences, weddings, and celebrations in the ponderosa pines of
              Kaibab National Forest — just minutes from Williams and a short
              drive from Flagstaff.
            </p>
            <p>
              Whether you need lodging, meeting space, a commercial kitchen, or
              simply room to gather, we are here to help you host with ease.
            </p>
          </div>
          <div className="intro-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gallery/photo-1.jpeg"
              alt="Campground lodge nestled among ponderosa pines"
            />
          </div>
        </div>
      </section>

      <section
        id="gatherings"
        className="section gatherings-section"
        aria-labelledby="gatherings-title"
      >
        <div className="shell">
          <p className="section-label">What we host</p>
          <h2 id="gatherings-title" className="section-title">
            Gatherings of every kind
          </h2>
          <p className="section-lead">
            From quiet retreats to lively receptions, our grounds are ready for
            the moments that matter.
          </p>
          <ul className="gatherings-list">
            {activities.map((item) => (
              <li key={item.title}>
                <span className="gathering-title">{item.title}</span>
                <p className="gathering-desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="amenities"
        className="section amenities-section"
        aria-labelledby="amenities-title"
      >
        <div className="shell">
          <p className="section-label">On site</p>
          <h2 id="amenities-title" className="section-title">
            Amenities that make hosting simple
          </h2>
          <p className="section-lead">
            Comfortable lodging, flexible meeting space, and recreation just
            outside the door.
          </p>
          <ul className="amenities-list">
            {amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="attractions"
        className="section attractions-section"
        aria-labelledby="attractions-title"
      >
        <div className="shell">
          <p className="section-label">Nearby</p>
          <h2 id="attractions-title" className="section-title">
            Northern Arizona at your doorstep
          </h2>
          <p className="section-lead">
            Explore iconic destinations minutes from camp — or stay close and
            enjoy the forest quiet.
          </p>
          <div className="attractions-flow">
            {attractions.map((item) => (
              <span key={item} className="attraction-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-preview" aria-labelledby="preview-title">
        <div className="shell">
          <div className="gallery-preview-head">
            <div>
              <p className="section-label">See the grounds</p>
              <h2 id="preview-title" className="section-title">
                A look inside the camp
              </h2>
            </div>
            <Link href="/gallery" className="btn btn-dark">
              View full gallery
            </Link>
          </div>
          <div className="gallery-mosaic">
            {featuredGallery.map((photo) => (
              <Link key={photo.src} href="/gallery" aria-label={photo.caption}>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              </Link>
            ))}
          </div>
          <p className="section-lead" style={{ marginTop: "1.5rem" }}>
            {site.contactCta}
          </p>
        </div>
      </section>
    </>
  );
}
