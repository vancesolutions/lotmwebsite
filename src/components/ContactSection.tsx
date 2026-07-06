import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <p className="contact-cta">{site.contactCta}</p>

      <div className="contact-details">
        <a href={`mailto:${site.email}`} className="contact-email">
          Email: {site.email}
        </a>
        <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="contact-phone">
          Phone: {site.phoneDisplay}
        </a>
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
    </section>
  );
}
