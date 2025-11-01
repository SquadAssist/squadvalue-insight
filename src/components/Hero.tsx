import { memo } from "react";
import { useAdaptiveVideo } from "@/hooks/use-adaptive-video";
const Hero = memo(() => {
  const {
    src,
    poster,
    ref: videoRef,
    isLoading,
    debugInfo
  } = useAdaptiveVideo({
    compressedSrc: "/lovable-uploads/SquadAssist_Trailer_Website_Compressed.mp4",
    highQualitySrc: "https://d1rnln83xwfrw6.cloudfront.net/SQUADASSIST_TRAILER_WEBSITE.mp4",
    poster: "/lovable-uploads/158ebda1-bd11-4ca8-9e18-691293cb87d4.png"
  });

  // EXPLICIT DEBUG: Log when src changes
  console.log('🚨🚨🚨 === HERO COMPONENT EXPLICIT DEBUG ===');
  console.log(`📹 Video src received from hook: ${src}`);
  console.log(`⏳ Is loading: ${isLoading}`);
  console.log(`🌍 Context: ${window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'}`);
  console.log(`🐛 Debug info:`, debugInfo);
  console.log(`📅 Hero render timestamp: ${new Date().toISOString()}`);
  return <section className="w-full pb-4 sm:pb-6 md:pb-8 pt-20 sm:pt-16 overflow-hidden relative">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full">
          {/* Full-width video container */}
          <div className="w-full mb-8 sm:mb-12 relative">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl overflow-hidden w-full">
              {/* Main background video */}
              <video ref={videoRef} key={src} // Force re-render when source changes
            src={src} poster={poster} autoPlay={!isLoading} // Only autoplay when not loading
            muted loop playsInline
            // Removed preload="metadata" to prevent source conflicts
            className="w-full h-full object-cover" aria-label="SquadAssist AI football transfer analysis platform demonstration video" />
            </div>
          </div>
          
          {/* Content section below the video */}
          <div style={{
          animationDelay: "800ms"
        }} className="w-full max-w-6xl text-center space-y-6 sm:space-y-8 animate-fade-up px-4 sm:px-6 text-4xl font-bold text-white">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">SquadAssist helps football clubs and agents win in the transfer market. Our AI-driven platform predicts a player's sportive impact and future transfer value.</p>
            
            {/* Feature cards */}
            
          </div>
        </div>
      </div>
    </section>;
});
export default Hero;