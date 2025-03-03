
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, DollarSign, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mb-10 lg:mb-0">
            <div className="inline-block animate-fade-in">
              <div className="py-1 px-3 bg-black/5 rounded-full text-sm font-medium text-gray-800 mb-4">
                AI-Powered Transfer Intelligence
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: "200ms" }}>
              Revolutionize your transfer strategy
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 animate-fade-up" style={{ animationDelay: "400ms" }}>
              Predict player value with precision. SquadAssist helps football clubs make data-driven transfer decisions by analyzing how players will perform within your specific team context.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "600ms" }}>
              <Button size="lg" className="group">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="col-span-2 glass-card rounded-lg p-4 flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "1000ms" }}>
                    <div className="bg-black rounded-full p-2 flex-shrink-0">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Performance Prediction</h3>
                      <p className="text-sm text-gray-600">+24% accuracy compared to traditional scouting</p>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4 flex flex-col justify-between animate-fade-in" style={{ animationDelay: "1200ms" }}>
                    <div className="bg-black rounded-full p-2 w-fit">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-medium mt-2">AI-driven insights</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4 flex flex-col justify-between animate-fade-in" style={{ animationDelay: "1400ms" }}>
                    <div className="bg-black rounded-full p-2 w-fit">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-medium mt-2">Value optimization</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black rounded-full hidden md:block animate-pulse-soft"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-black/10 rounded-full hidden md:block animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
