import { AttractionsSection } from "@/components/AttractionsSection";
import { ContactSection } from "@/components/ContactSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { OutdoorsSection } from "@/components/OutdoorsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FacilitiesSection />
      <OutdoorsSection />
      <AttractionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
