import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/p1-img-0.png"
        alt="Snow-capped mountains viewed from Kaibab National Forest"
        className="hero-image"
      />

      <div className="hero-topbar">
        <p className="hero-address">
          {site.address.street}
          <br />
          {site.address.city}
        </p>
        <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="hero-phone">
          {site.phone}
        </a>
      </div>

      <div className="hero-logo-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/p1-img-1.png"
          alt={site.name}
          width={400}
          height={122}
          className="hero-logo"
        />
      </div>
    </section>
  );
}
