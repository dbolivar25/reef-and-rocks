import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductShowcase } from "@/components/product-showcase";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <ContactSection />
    </div>
  );
}

