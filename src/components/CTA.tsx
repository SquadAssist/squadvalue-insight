
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Ready to Transform Your Transfer Strategy?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-10 animate-fade-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "200ms" }}>
            Join the leading clubs that are using data-driven insights to make smarter transfer decisions and gain a competitive edge.
          </p>
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                Contact Us <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
