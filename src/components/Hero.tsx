
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import DataVisualization from "./DataVisualization";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-subtle via-white to-navy-light/20">
      {/* Animated Data Visualization Background */}
      <DataVisualization />
      
      {/* Main Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-lg animate-fade-in">
            <Zap className="h-4 w-4 text-tech-blue" />
            <span className="text-sm font-medium text-navy-deep">AI-Powered Transfer Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold tracking-tight heading-premium animate-fade-up" 
              style={{ animationDelay: "200ms" }}>
            Revolutionize Your
            <span className="block text-navy-primary">Transfer Strategy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-up font-inter" 
             style={{ animationDelay: "400ms" }}>
            Predict player value and performance within your specific team context. 
            Make data-driven decisions that maximize ROI and minimize risk.
          </p>

          {/* Key Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up" 
               style={{ animationDelay: "600ms" }}>
            <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50">
              <BarChart3 className="h-5 w-5 text-navy-primary" />
              <span className="text-sm font-medium text-navy-deep">Performance Prediction</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50">
              <TrendingUp className="h-5 w-5 text-navy-primary" />
              <span className="text-sm font-medium text-navy-deep">Value Optimization</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/50">
              <Zap className="h-5 w-5 text-navy-primary" />
              <span className="text-sm font-medium text-navy-deep">AI-Driven Insights</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: "800ms" }}>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-navy-primary hover:bg-navy-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-premium hover:shadow-premium-lg button-premium group"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-500 animate-fade-up" 
               style={{ animationDelay: "1000ms" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Trusted by Football Clubs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>AI-Powered Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Premium Consultancy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
