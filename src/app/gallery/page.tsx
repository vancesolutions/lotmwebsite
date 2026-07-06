import Image from "next/image";
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
    <main className="gallery-page">
      <div className="gallery-header">
        <h1>Photo Gallery</h1>
        <Link href="/" className="back-link">
          Back to Home
        </Link>
      </div>

      <div className="gallery-grid">
        {galleryPhotos.map((photo) => (
          <figure key={photo.src} className="gallery-item">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={800}
              className="gallery-image"
            />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <Footer />
    </main>
  );
}
