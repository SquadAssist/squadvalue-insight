
import { useEffect } from "react";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { updatePageSEO, pageSEOConfigs } from "@/utils/seo";
import { generateBreadcrumbStructuredData, breadcrumbConfigs } from "@/utils/breadcrumbs";

const FAQPage = () => {
  useEffect(() => {
    const breadcrumbData = generateBreadcrumbStructuredData(breadcrumbConfigs.faq);
    const enhancedSEO = {
      ...pageSEOConfigs.faq,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          pageSEOConfigs.faq.structuredData,
          breadcrumbData
        ]
      }
    };
    updatePageSEO(enhancedSEO);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
