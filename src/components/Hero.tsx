import { memo } from "react";

const Hero = memo(() => {
  return <section className="w-full pb-12 sm:pb-16 md:pb-24 pt-20 sm:pt-16 overflow-hidden bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full">
          {/* Full-width video container */}
          <div className="w-full mb-8 sm:mb-12 relative">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl overflow-hidden w-full">
              {/* Main background video */}
              <video 
                src="/lovable-uploads/SquadAssist_Trailer_Website_Compressed.mp4"
                poster="/lovable-uploads/158ebda1-bd11-4ca8-9e18-691293cb87d4.png"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="SquadAssist AI football transfer analysis platform demonstration video"
              />
            </div>
          </div>
          
          {/* Content section below the video */}
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