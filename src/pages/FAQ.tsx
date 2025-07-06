
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQPage = () => {
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
