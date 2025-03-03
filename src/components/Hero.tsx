
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, DollarSign, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

// Image sequence with football journey from analysis to trophy
const imageSequence = [
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // Data visualization
    alt: "Football data analysis",
    delay: 3000, // 3 second initial delay
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // Laptops with analysis
    alt: "Laptop analysis for football recruitment",
    delay: 2500,
  },
  {
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018", // Training
    alt: "Football team training",
    delay: 2000,
  },
  {
    url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d", // Team huddle
    alt: "Football team huddle",
    delay: 1800,
  },
  {
    url: "https://images.unsplash.com/photo-1521731978332-9e9e714bdd20", // Stadium view
    alt: "Football stadium match day",
    delay: 1600,
  },
  {
    url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55", // Shot being taken
    alt: "Football player taking a shot",
    delay: 1400,
  },
  {
    url: "https://images.unsplash.com/photo-1626248801378-38a7942f8b5e", // Goal
    alt: "Goal being scored",
    delay: 1200,
  },
  {
    url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974", // Celebration
    alt: "Players celebrating a goal",
    delay: 1000,
  },
  {
    url: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed", // Trophy
    alt: "Championship trophy",
    delay: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1461696114087-397271a7aedc", // Championship celebration
    alt: "Team celebrating with trophy",
    delay: 0, // Final image stays
  },
];

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
            
            <div className="flex justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "600ms" }}>
              <Button size="lg" className="group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 w-full h-full">
                  <div className="relative w-full h-full">
                    {/* Main image with transition */}
                    <img 
                      src={imageSequence[currentImageIndex].url} 
                      alt={imageSequence[currentImageIndex].alt} 
                      className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
                    />
                    
                    {/* Progress bar indicating sequence progress */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10">
                      <div 
                        className="h-full bg-black transition-all duration-300 ease-out"
                        style={{ 
                          width: `${(currentImageIndex / (imageSequence.length - 1)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Overlay cards */}
                <div className="absolute inset-0 w-full h-full p-6 flex flex-col justify-between pointer-events-none">
                  <div className="glass-card rounded-lg p-4 flex items-center space-x-4 w-3/4 pointer-events-auto animate-fade-in" style={{ animationDelay: "1400ms" }}>
                    <div className="bg-black rounded-full p-2 flex-shrink-0">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Performance Prediction</h3>
                      <p className="text-sm text-gray-600">+24% accuracy compared to traditional scouting</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="glass-card rounded-lg p-4 flex flex-col justify-between w-1/2 pointer-events-auto animate-fade-in" style={{ animationDelay: "1600ms" }}>
                      <div className="bg-black rounded-full p-2 w-fit">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-medium mt-2">AI-driven insights</p>
                    </div>
                    
                    <div className="glass-card rounded-lg p-4 flex flex-col justify-between w-1/2 pointer-events-auto animate-fade-in" style={{ animationDelay: "1800ms" }}>
                      <div className="bg-black rounded-full p-2 w-fit">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-medium mt-2">Value optimization</p>
                    </div>
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
