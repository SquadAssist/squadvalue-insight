import { memo } from "react";
import { useAdaptiveVideo } from "@/hooks/use-adaptive-video";
const Hero = memo(() => {
  const { src, poster, ref: videoRef, isLoading, debugInfo } = useAdaptiveVideo({
    compressedSrc: "/lovable-uploads/SquadAssist_Trailer_Website_Compressed.mp4",
    highQualitySrc: "/lovable-uploads/SQUADASSIST_TRAILER_WEBSITE.mp4",
    poster: "/lovable-uploads/158ebda1-bd11-4ca8-9e18-691293cb87d4.png"
  });

  // Debug: Log when src changes
  console.log('🏆 === HERO COMPONENT RENDER ===')
  console.log(`📹 Current src from hook: ${src}`)
  console.log(`⏳ Is loading: ${isLoading}`)
  console.log(`🌍 Context: ${window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'}`)
  console.log(`🐛 Debug info:`, debugInfo)

  return <section className="w-full pb-4 sm:pb-6 md:pb-8 pt-20 sm:pt-16 overflow-hidden bg-background">
      {/* Debug Info Panel - Only show in development */}
      {import.meta.env.DEV && debugInfo && Object.keys(debugInfo).length > 0 && (
        <div className="fixed top-4 right-4 z-50 bg-black/90 text-white p-3 rounded-lg text-xs max-w-xs border border-gray-600">
          <div className="font-bold mb-2 text-yellow-400">🐛 Video Debug</div>
          <div className="space-y-1">
            <div>Context: <span className="text-blue-300">{debugInfo.context}</span></div>
            <div>Expected: <span className="text-green-300">{debugInfo.expectedQuality}</span></div>
            <div>Resolution: <span className="text-purple-300">{debugInfo.resolution}</span></div>
            <div>Ready: <span className="text-orange-300">{debugInfo.readyState}</span></div>
            <div className="text-xs text-gray-300 mt-2 break-all">
              Expected: {debugInfo.expectedSrc?.split('/').pop()?.slice(0, 20)}...
            </div>
            <div className="text-xs text-gray-300 break-all">
              Actual: {debugInfo.actualSrc?.split('/').pop()?.slice(0, 20)}...
            </div>
          </div>
        </div>
      )}
      
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full">
          {/* Full-width video container */}
          <div className="w-full mb-8 sm:mb-12 relative">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl overflow-hidden w-full">
              {/* Main background video */}
              <video 
                ref={videoRef}
                key={src} // Force re-render when source changes
                src={src} 
                poster={poster} 
                autoPlay={!isLoading} // Only autoplay when not loading
                muted 
                loop 
                playsInline 
                // Removed preload="metadata" to prevent source conflicts
                className="w-full h-full object-cover" 
                aria-label="SquadAssist AI football transfer analysis platform demonstration video" 
              />
            </div>
          </div>
          
          {/* Content section below the video */}
          <div className="w-full max-w-6xl text-center space-y-6 sm:space-y-8 animate-fade-up px-4 sm:px-6" style={{
          animationDelay: "800ms"
        }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">SquadAssist helps football clubs and agents win in the transfer market. Our AI-driven platform predicts a player's sportive impact and future transfer value, giving everyone a clear view on who is the best value-for-money option in this context.</p>
            
            {/* Feature cards */}
            
          </div>
        </div>
      </div>
    </section>;
});
export default Hero;