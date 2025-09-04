import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Hero = memo(() => {
  return <section className="w-full pb-12 sm:pb-16 md:pb-24 pt-20 sm:pt-16 overflow-hidden bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full">
          {/* Full-width image sequence container */}
          <div className="w-full mb-8 sm:mb-12 relative">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl overflow-hidden w-full">
              {/* Main background image */}
              <img 
                src="/lovable-uploads/158ebda1-bd11-4ca8-9e18-691293cb87d4.png" 
                alt="SquadAssist AI football transfer analysis platform - Blue gradient background" 
                className="w-full h-full object-cover" 
                fetchPriority="high" 
                loading="eager"
              />
              
              {/* Overlay with heading positioned on top of the image */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                  {/* Position the badge lower on mobile devices */}
                  <div className="inline-block animate-fade-in mt-4 md:mt-0">
                    <div className="py-1 px-3 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-white mb-2 md:mb-4">
                      AI-Powered Transfer Intelligence
                    </div>
                  </div>
                  
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white animate-fade-up leading-tight" style={{
                  animationDelay: "200ms"
                }}>Predict the added value a player will create</h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mt-3 sm:mt-4 md:mt-6 animate-fade-up max-w-4xl mx-auto" style={{
                  animationDelay: "400ms"
                }}>Predict the future transfer value and sportive impact of a player to make the best possible transfer decisions by leveraging AI-powered football transfer intelligence </p>
                  
                  <div className="mt-6 sm:mt-8 animate-fade-up" style={{
                  animationDelay: "600ms"
                }}>
                    <Link to="/contact">
                      <Button size="lg" className="bg-white text-black hover:bg-white/90 group text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section below the image */}
          <div className="w-full max-w-6xl text-center space-y-6 sm:space-y-8 animate-fade-up px-4 sm:px-6" style={{
          animationDelay: "800ms"
        }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">SquadAssist helps football clubs and agents make data-driven transfer decisions by analyzing how players will perform within a specific team context. Our AI-powered platform predicts both on field value and future transfer value, giving you the competitive edge in football recruitment.</p>
            
            {/* Feature cards */}
            
          </div>
        </div>
      </div>
    </section>;
});
export default Hero;