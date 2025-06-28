
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import DataVisualization from "./DataVisualization";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-subtle/50 to-navy-light/10">
      {/* Professional Data Background */}
      <DataVisualization />
      
      {/* Main Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-lg animate-fade-in">
            <Shield className="h-4 w-4 text-navy-primary" />
            <span className="text-sm font-medium text-navy-deep">Enterprise AI Transfer Intelligence</span>
          </div>

          {/* Professional Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold tracking-tight text-navy-deep animate-fade-up" 
                style={{ animationDelay: "200ms" }}>
              Data-Driven Transfer
              <span className="block text-navy-primary">Decision Intelligence</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-up font-inter" 
               style={{ animationDelay: "400ms" }}>
              Advanced AI platform that predicts player performance and value within your specific team context. 
              Minimize transfer risk and maximize ROI with enterprise-grade analytics trusted by football professionals.
            </p>
          </div>

          {/* Professional Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-up" 
               style={{ animationDelay: "600ms" }}>
            <div className="flex flex-col items-center gap-3 px-6 py-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-subtle">
              <TrendingUp className="h-6 w-6 text-navy-primary" />
              <div className="text-center">
                <h3 className="text-sm font-semibold text-navy-deep mb-1">Performance Prediction</h3>
                <p className="text-xs text-slate-600">AI-powered player analysis</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 px-6 py-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-subtle">
              <Shield className="h-6 w-6 text-navy-primary" />
              <div className="text-center">
                <h3 className="text-sm font-semibold text-navy-deep mb-1">Risk Mitigation</h3>
                <p className="text-xs text-slate-600">Data-driven decision support</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 px-6 py-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-subtle">
              <Award className="h-6 w-6 text-navy-primary" />
              <div className="text-center">
                <h3 className="text-sm font-semibold text-navy-deep mb-1">ROI Optimization</h3>
                <p className="text-xs text-slate-600">Maximize transfer value</p>
              </div>
            </div>
          </div>

          {/* Professional CTA */}
          <div className="animate-fade-up" style={{ animationDelay: "800ms" }}>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-navy-primary hover:bg-navy-primary/90 text-white px-10 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Professional Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-500 animate-fade-up" 
               style={{ animationDelay: "1000ms" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Professional Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-navy-primary" />
              <span>Proven Methodology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
