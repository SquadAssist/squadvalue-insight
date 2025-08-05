
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LinearStyleFeatures from "@/components/LinearStyleFeatures";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LinearStyleFeatures />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
