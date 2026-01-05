import { Header } from "@/components/Header";
import { PartnershipBanner } from "@/components/PartnershipBanner";
import { Hero } from "@/components/Hero";
import { PartnersLogos } from "@/components/PartnersLogos";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { VideoSection } from "@/components/VideoSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PartnershipBanner />
        <PartnersLogos />
        <VideoSection />
        <Features />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
