
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactButton from "@/components/ContactButton";
import LinearStyleFeatures from "@/components/LinearStyleFeatures";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { updatePageSEO, pageSEOConfigs } from "@/utils/seo";
import { addPerformanceOptimizations } from "@/utils/breadcrumbs";
import backgroundImage from "@/assets/pricing-background.png";

const Index = () => {
  useEffect(() => {
    updatePageSEO(pageSEOConfigs.home);
    addPerformanceOptimizations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed" style={{
      backgroundImage: `url(${backgroundImage})`
    }}>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ContactButton />
        <LinearStyleFeatures />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
