import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo, memo } from "react";
import { Link } from "react-router-dom";

const imageSequence = [{
  url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop&crop=center&q=80&fm=webp",
  srcSet: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop&crop=center&q=80&fm=webp 400w, https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop&crop=center&q=80&fm=webp 800w, https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&h=900&fit=crop&crop=center&q=80&fm=webp 1200w, https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&h=1200&fit=crop&crop=center&q=80&fm=webp 1600w",
  sizes: "(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1440px) 1200px, 1600px",
  // Football on grass pitch
  alt: "Football on grass pitch - professional football analysis",
  delay: 0 // Remove initial delay for LCP optimization
}, {
  url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop&crop=center&q=80&fm=webp",
  srcSet: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&crop=center&q=80&fm=webp 400w, https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop&crop=center&q=80&fm=webp 800w, https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=900&fit=crop&crop=center&q=80&fm=webp 1200w, https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&h=1200&fit=crop&crop=center&q=80&fm=webp 1600w",
  sizes: "(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1440px) 1200px, 1600px",
  // Training
  alt: "Football team training",
  delay: 3000 // Start animation sequence after showing first image
}, {
  url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop&crop=center&q=80&fm=webp",
  srcSet: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=300&fit=crop&crop=center&q=80&fm=webp 400w, https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop&crop=center&q=80&fm=webp 800w, https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&h=900&fit=crop&crop=center&q=80&fm=webp 1200w, https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1600&h=1200&fit=crop&crop=center&q=80&fm=webp 1600w",
  sizes: "(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1440px) 1200px, 1600px",
  // Team huddle
  alt: "Football team huddle",
  delay: 2500
}, {
  url: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=800&h=600&fit=crop&crop=center&q=80&fm=webp",
  srcSet: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=400&h=300&fit=crop&crop=center&q=80&fm=webp 400w, https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=800&h=600&fit=crop&crop=center&q=80&fm=webp 800w, https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=1200&h=900&fit=crop&crop=center&q=80&fm=webp 1200w, https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=1600&h=1200&fit=crop&crop=center&q=80&fm=webp 1600w",
  sizes: "(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1440px) 1200px, 1600px",
  // Alternative stadium image
  alt: "Football stadium with fans",
  delay: 2000
}, {
  url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop&crop=center&q=80&fm=webp",
  srcSet: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop&crop=center&q=80&fm=webp 400w, https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop&crop=center&q=80&fm=webp 800w, https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=900&fit=crop&crop=center&q=80&fm=webp 1200w, https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1600&h=1200&fit=crop&crop=center&q=80&fm=webp 1600w",
  sizes: "(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1440px) 1200px, 1600px",
  // Shot being taken
  alt: "Football player taking a shot",
  delay: 1800
}, {
  url: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?w=800&h=600&fit=crop&crop=center&q=80&fm=webp",
  srcSet: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?w=400&h=300&fit=crop&crop=center&q=80&fm=webp 400w, https://images.unsplash.com/photo-1600679472829-3044539ce8ed?w=800&h=600&fit=crop&crop=center&q=80&fm=webp 800w, https://images.unsplash.com/photo-1600679472829-3044539ce8ed?w=1200&h=900&fit=crop&crop=center&q=80&fm=webp 1200w, https://images.unsplash.com/photo-1600679472829-3044539ce8ed?w=1600&h=1200&fit=crop&crop=center&q=80&fm=webp 1600w",
  sizes: "(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1440px) 1200px, 1600px",
  // Trophy as final image
  alt: "Championship trophy",
  delay: 0 // Final image stays
}];
const Hero = memo(() => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // Memoize progress calculation to reduce blocking time
  const progressWidth = useMemo(() => {
    return `${currentImageIndex / (imageSequence.length - 1) * 100}%`;
  }, [currentImageIndex]);
  
  // Memoize current image data to prevent object recreation
  const currentImage = useMemo(() => {
    return imageSequence[currentImageIndex];
  }, [currentImageIndex]);
  
  useEffect(() => {
    // Optimize timer usage to reduce main thread blocking
    if (currentImageIndex < imageSequence.length - 1) {
      const delay = imageSequence[currentImageIndex].delay;
      
      // For immediate transitions (delay = 0), use requestIdleCallback if available
      if (delay === 0) {
        const callback = () => setCurrentImageIndex(prevIndex => prevIndex + 1);
        
        if ('requestIdleCallback' in window) {
          const idleId = requestIdleCallback(callback);
          return () => cancelIdleCallback(idleId);
        } else {
          const rafId = requestAnimationFrame(callback);
          return () => cancelAnimationFrame(rafId);
        }
      } else {
        // For delayed transitions, use setTimeout with optimization
        const timer = setTimeout(() => {
          setCurrentImageIndex(prevIndex => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timer);
      }
    } else if (currentImageIndex === imageSequence.length - 1 && !animationComplete) {
      setAnimationComplete(true);
    }
  }, [currentImageIndex, animationComplete]);
  return <section className="w-full pb-12 sm:pb-16 md:pb-24 pt-20 sm:pt-16 overflow-hidden bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full">
          {/* Full-width image sequence container */}
          <div className="w-full mb-8 sm:mb-12 relative">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl overflow-hidden w-full">
              {/* Speed Index optimization - skeleton loader */}
              {!isImageLoaded && (
                <div className="hero-skeleton absolute inset-0 rounded-lg sm:rounded-xl" />
              )}
              
              {/* Main image with transition - removed aspect ratio to prevent gray areas */}
              <img 
                src={currentImage.url} 
                srcSet={currentImage.srcSet}
                sizes={currentImage.sizes}
                alt={`${currentImage.alt} - SquadAssist AI football transfer analysis platform`} 
                className="w-full h-full object-cover transition-opacity duration-500 will-change-contents" 
                fetchPriority="high" 
                loading="eager"
                onLoad={() => setIsImageLoaded(true)}
              />
              
              {/* Progress bar indicating sequence progress */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10">
                <div className="h-full bg-black transition-all duration-300 ease-out" style={{
                width: progressWidth
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