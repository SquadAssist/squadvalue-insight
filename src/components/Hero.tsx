import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Image sequence with football journey from analysis to trophy (removed data visualization)
const imageSequence = [{
  url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  // Data analytics dashboard
  alt: "Data analytics dashboard for football transfer analysis",
  delay: 3000 // 3 second initial delay
}, {
  url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
  // Training
  alt: "Football team training",
  delay: 2500
}, {
  url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d",
  // Team huddle
  alt: "Football team huddle",
  delay: 2000
}, {
  url: "https://images.unsplash.com/photo-1486286701208-1d58e9338013",
  // Alternative stadium image
  alt: "Football stadium with fans",
  delay: 1800
}, {
  url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
  // Shot being taken
  alt: "Football player taking a shot",
  delay: 1600
}, {
  url: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
  // Trophy as final image
  alt: "Championship trophy",
  delay: 0 // Final image stays
}];
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    // Start the image sequence with the initial delay
    if (currentImageIndex < imageSequence.length - 1) {
      const timer = setTimeout(() => {
        setCurrentImageIndex(prevIndex => prevIndex + 1);
      }, imageSequence[currentImageIndex].delay);
      return () => clearTimeout(timer);
    } else if (currentImageIndex === imageSequence.length - 1 && !animationComplete) {
      setAnimationComplete(true);
    }
  }, [currentImageIndex, animationComplete]);
  return <section className="w-full pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 overflow-hidden bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full">
          {/* Full-width image sequence container */}
          <div className="w-full mb-8 sm:mb-12 relative">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl overflow-hidden w-full">
              {/* Main image with transition - removed aspect ratio to prevent gray areas */}
              <img src={imageSequence[currentImageIndex].url} alt={`${imageSequence[currentImageIndex].alt} - SquadAssist AI football transfer analysis platform`} className="w-full h-full object-cover transition-opacity duration-500" />
              
              {/* Progress bar indicating sequence progress */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10">
                <div className="h-full bg-black transition-all duration-300 ease-out" style={{
                width: `${currentImageIndex / (imageSequence.length - 1) * 100}%`
              }} />
              </div>
              
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
                }}>Predict the added value a player will create for a club</h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mt-3 sm:mt-4 md:mt-6 animate-fade-up max-w-4xl mx-auto" style={{
                  animationDelay: "400ms"
                }}>AI-powered football transfer intelligence: Predict future transfer value and sportive impact to help make the best possible transfer decisions</p>
                  
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">SquadAssist helps football clubs and agents make data-driven transfer decisions by analyzing how players will perform within your specific team context. Our AI-powered platform predicts both on-field value and future transfer value, giving you the competitive edge in football recruitment.</p>
            
            {/* Feature cards */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;