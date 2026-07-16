import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-panel">
          <p className="section-label">Get in touch</p>
          <h2 id="contact-title" className="section-title">
            Plan your next event with us
          </h2>
          <p className="section-lead">{site.contactCta}</p>

          <div className="contact-links">
            <a href={`mailto:${site.email}`} className="contact-link">
              <MailIcon />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              className="contact-link"
            >
              <PhoneIcon />
              {site.phoneDisplay}
            </a>
          </div>

          <div className="contact-link" style={{ alignItems: "flex-start" }}>
            <MapPinIcon />
            <p className="contact-address">
              {site.address.street}
              <br />
              {site.address.city}
            </p>
          </div>
        </div>

        <div className="map-wrap">
          <iframe
            title="Light On The Mountain Campground location"
            src="https://maps.google.com/maps?q=Light+On+The+Mountain+Campground+2284+S+Perkinsville+Rd+Williams+AZ+86046&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-embed"
          />
        </div>
      </div>
    </section>
  );
}
