
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-foreground text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="urgency-badge bg-white/10 text-white border-white/20 mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            ⏰ Early access stops soon
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Stop Gambling with Transfers.
            <span className="block text-accent">Start Winning with Data.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "300ms" }}>
            Join forward-thinking clubs using AI to gain a competitive edge in player recruitment. Every day you wait, your competitors get ahead.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 group">
                Contact Sales Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 group">
                See Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
