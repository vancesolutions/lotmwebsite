import Image from "next/image";
import { site } from "@/data/site";
import { InquiryForm } from "@/components/InquiryForm";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export function ContactSection() {
  return (
    <section id="contact" className="section section-dark">
      <div className="container contact-grid">
        <div className="contact-form-block">
          <p className="section-eyebrow section-eyebrow-light">
            Start Your Journey
          </p>
          <h2 className="section-title section-title-light">Plan Your Retreat</h2>
          <InquiryForm />
        </div>

        <div className="contact-info-block">
          <p className="section-eyebrow section-eyebrow-light">Get In Touch</p>

          <ul className="contact-list">
            <li>
              <PhoneIcon className="contact-icon" />
              <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <MailIcon className="contact-icon" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <MapPinIcon className="contact-icon" />
              <address>
                {site.address.street}
                <br />
                {site.address.city}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="container contact-map-block">
        <div className="address-banner">
          <MapPinIcon className="address-icon" />
          <div>
            <p>{site.address.street}</p>
            <p>{site.address.city}</p>
          </div>
        </div>

        <div className="map-wrap">
          <iframe
            title="Light On The Mountain Campground location"
            src="https://maps.google.com/maps?q=2284+S+Perkinsville+Rd+Williams+AZ+86046&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-embed"
          />
        </div>

        <div className="sign-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80"
            alt="Campground entrance among ponderosa pines"
            width={1400}
            height={780}
            className="sign-image"
          />
        </div>
      </div>
    </section>
  );
}
