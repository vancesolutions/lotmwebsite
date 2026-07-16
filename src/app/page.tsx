import { BrochureContent } from "@/components/BrochureContent";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrochureContent />
      <ContactSection />
      <Footer />
    </main>
  );
}
