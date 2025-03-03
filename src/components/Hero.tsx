
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Image sequence with football journey from analysis to trophy
const imageSequence = [{
  url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  // Data visualization
  alt: "Football data analysis",
  delay: 3000 // 3 second initial delay
}, {
  url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  // Laptops with analysis
  alt: "Laptop analysis for football recruitment",
  delay: 2500
}, {
  url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
  // Training
  alt: "Football team training",
  delay: 2000
}, {
  url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d",
  // Team huddle
  alt: "Football team huddle",
  delay: 1800
}, {
  url: "https://images.unsplash.com/photo-1486286701208-1d58e9338013",
  // Alternative stadium image
  alt: "Football stadium with fans",
  delay: 1600
}, {
  url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
  // Shot being taken
  alt: "Football player taking a shot",
  delay: 1400
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
  return <section className="pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Full-width image sequence container */}
          <div className="w-full mb-12 relative">
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl mx-auto max-w-6xl">
              {/* Main image with transition */}
              <img src={imageSequence[currentImageIndex].url} alt={imageSequence[currentImageIndex].alt} className="w-full h-full object-cover rounded-xl transition-opacity duration-500" />
              
              {/* Progress bar indicating sequence progress */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10">
                <div className="h-full bg-black transition-all duration-300 ease-out" style={{
                width: `${currentImageIndex / (imageSequence.length - 1) * 100}%`
              }} />
              </div>
              
              {/* Overlay with heading positioned on top of the image */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center max-w-3xl px-4">
                  {/* Position the badge lower on mobile devices */}
                  <div className="inline-block animate-fade-in mt-4 md:mt-0">
                    <div className="py-1 px-3 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-white mb-2 md:mb-4">
                      AI-Powered Transfer Intelligence
                    </div>
                  </div>
                  
                  <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white animate-fade-up" style={{
                  animationDelay: "200ms"
                }}>
                    Revolutionize your transfer strategy
                  </h1>
                  
                  <p className="text-sm md:text-xl text-white/90 mt-2 md:mt-4 animate-fade-up px-2 md:px-0" style={{
                  animationDelay: "400ms"
                }}>Predict how much value a specific player brings to your specific club so that you know who is the best value-for-money</p>
                  
                  <div className="mt-4 md:mt-8 animate-fade-up" style={{
                  animationDelay: "600ms"
                }}>
                    <Link to="/contact">
                      <Button size="sm" className="bg-white text-black hover:bg-white/90 group md:size-lg">
                        Contact Us
                        <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section below the image */}
          <div className="w-full max-w-3xl text-center space-y-4 md:space-y-6 animate-fade-up" style={{
          animationDelay: "800ms"
        }}>
            <p className="text-base md:text-xl text-gray-600 px-2 md:px-0">
              SquadAssist helps football clubs make data-driven transfer decisions by analyzing how players will perform within your specific team context.
            </p>
            
            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="glass-card p-4 md:p-6 rounded-lg animate-fade-up" style={{
              animationDelay: "1000ms"
            }}>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Value Optimization</h3>
                <p className="text-xs md:text-sm text-gray-600">Identify the best players within your transfer budget</p>
              </div>
              
              <div className="glass-card p-4 md:p-6 rounded-lg animate-fade-up" style={{
              animationDelay: "1200ms"
            }}>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Player Comparison</h3>
                <p className="text-xs md:text-sm text-gray-600">Compare players to see who is most worth his money</p>
              </div>
              
              <div className="glass-card p-4 md:p-6 rounded-lg animate-fade-up" style={{
              animationDelay: "1400ms"
            }}>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Player Assessment</h3>
                <p className="text-xs md:text-sm text-gray-600">Unsure if a player is worth his cost? Check his value!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
