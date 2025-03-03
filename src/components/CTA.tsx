
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Ready to Transform Your Transfer Strategy?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Join the leading clubs that are using data-driven insights to make smarter transfer decisions and gain a competitive edge.
          </p>
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 group">
              Contact Us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
