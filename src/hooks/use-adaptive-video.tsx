import { useState, useEffect, useCallback } from 'react'

interface AdaptiveVideoConfig {
  compressedSrc: string
  highQualitySrc: string
  poster?: string
}

interface AdaptiveVideoState {
  currentSrc: string
  isHDReady: boolean
  networkQuality: 'slow' | 'fast' | 'unknown'
}

export function useAdaptiveVideo({ compressedSrc, highQualitySrc, poster }: AdaptiveVideoConfig) {
  console.log('🎥 useAdaptiveVideo hook initialized', { compressedSrc, highQualitySrc })
  
  const [state, setState] = useState<AdaptiveVideoState>({
    currentSrc: compressedSrc,
    isHDReady: false,
    networkQuality: 'unknown'
  })

  const detectNetworkQuality = useCallback((): 'slow' | 'fast' | 'unknown' => {
    console.log('🔍 Detecting network quality...')
    
    // Check if user prefers reduced data
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection) {
        // Use Network Information API
        const effectiveType = connection.effectiveType
        const saveData = connection.saveData
        const downlink = connection.downlink
        
        console.log('📊 Network Info:', { effectiveType, saveData, downlink })
        
        if (saveData) {
          console.log('⚡ Save data enabled - using compressed video')
          return 'slow'
        }
        
        // More aggressive HD detection for good connections
        if (effectiveType === '4g' || downlink > 1.5) {
          console.log('🚀 Fast connection detected - will upgrade to HD')
          return 'fast'
        }
        
        if (effectiveType === '3g' || effectiveType === '2g' || effectiveType === 'slow-2g') {
          console.log('🐌 Slow connection detected')
          return 'slow'
        }
      }
    }

    // Fallback: be more optimistic for desktop users
    const isMobile = window.innerWidth < 768
    const isLowEnd = 'deviceMemory' in navigator && (navigator as any).deviceMemory < 4
    
    console.log('📱 Device info:', { isMobile, isLowEnd, width: window.innerWidth })
    
    // Default to fast for desktop users with no connection info
    if (!isMobile && !isLowEnd) {
      console.log('💻 Desktop detected - defaulting to HD')
      return 'fast'
    }
    
    return isMobile || isLowEnd ? 'slow' : 'fast'
  }, [])

  const preloadHighQuality = useCallback(() => {
    if (state.isHDReady) return

    console.log('🎬 Starting HD video preload:', highQualitySrc)
    
    const video = document.createElement('video')
    video.preload = 'metadata'
    video.src = highQualitySrc
    
    const handleCanPlay = () => {
      console.log('✅ HD video ready! Switching to high quality')
      // Force immediate state update
      setState(prev => ({ 
        ...prev, 
        isHDReady: true, 
        currentSrc: highQualitySrc 
      }))
      video.removeEventListener('canplaythrough', handleCanPlay)
      video.removeEventListener('loadeddata', handleCanPlay)
    }
    
    const handleError = () => {
      console.warn('❌ Failed to preload HD video, staying with compressed version')
      video.removeEventListener('error', handleError)
    }

    video.addEventListener('canplaythrough', handleCanPlay)
    video.addEventListener('loadeddata', handleCanPlay) // Additional event for better reliability
    video.addEventListener('error', handleError)
    
    // Cleanup timeout
    setTimeout(() => {
      video.removeEventListener('canplaythrough', handleCanPlay)
      video.removeEventListener('loadeddata', handleCanPlay)
      video.removeEventListener('error', handleError)
      console.log('⏰ HD video preload timeout')
    }, 10000) // 10 second timeout
  }, [highQualitySrc, state.isHDReady])

  useEffect(() => {
    console.log('🚀 useEffect triggered for adaptive video')
    
    // Initial network quality detection
    const quality = detectNetworkQuality()
    console.log('🌐 Network quality detected:', quality)
    setState(prev => ({ ...prev, networkQuality: quality }))

    // For desktop users with likely good connections, start HD preload immediately
    const isDesktop = window.innerWidth >= 1024
    if (isDesktop || quality === 'fast') {
      console.log('⏱️ Starting immediate HD preload for desktop/fast connection')
      // Start preloading HD immediately for desktop users
      setTimeout(() => {
        preloadHighQuality()
      }, 500) // Very short delay
    } else {
      console.log('📵 Not desktop or fast connection, staying with compressed video')
    }
  }, [detectNetworkQuality, preloadHighQuality])

  return {
    src: state.currentSrc,
    poster,
    isHDReady: state.isHDReady,
    networkQuality: state.networkQuality
  }
}