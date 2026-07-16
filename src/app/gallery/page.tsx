import Link from "next/link";
import { Footer } from "@/components/Footer";
import { galleryPhotos } from "@/data/site";

export const metadata = {
  title: "Photo Gallery | Light On The Mountain Campground",
  description:
    "Photos of Light On The Mountain Campground facilities and nearby Northern Arizona attractions.",
};

export default function GalleryPage() {
  return (
    <main>
      <div className="gallery-page">
        <div className="shell">
          <div className="gallery-page-header">
            <Link href="/" className="back-link">
              ← Back to home
            </Link>
            <h1>Photo gallery</h1>
          </div>

          <div className="gallery-grid">
            {galleryPhotos.map((photo) => (
              <figure key={photo.src} className="gallery-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
