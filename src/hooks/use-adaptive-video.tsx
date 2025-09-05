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
      setState(prev => ({ ...prev, isHDReady: true, currentSrc: highQualitySrc }))
      video.removeEventListener('canplaythrough', handleCanPlay)
    }
    
    const handleError = () => {
      console.warn('❌ Failed to preload HD video, staying with compressed version')
      video.removeEventListener('error', handleError)
    }

    video.addEventListener('canplaythrough', handleCanPlay)
    video.addEventListener('error', handleError)
    
    // Cleanup timeout
    setTimeout(() => {
      video.removeEventListener('canplaythrough', handleCanPlay)
      video.removeEventListener('error', handleError)
      console.log('⏰ HD video preload timeout')
    }, 10000) // 10 second timeout
  }, [highQualitySrc, state.isHDReady])

  useEffect(() => {
    // Initial network quality detection
    const quality = detectNetworkQuality()
    console.log('🌐 Network quality detected:', quality)
    setState(prev => ({ ...prev, networkQuality: quality }))

    // If network is fast, preload HD version after a short delay
    if (quality === 'fast') {
      console.log('⏱️ Setting timer to preload HD video in 1 second...')
      const timer = setTimeout(() => {
        preloadHighQuality()
      }, 1000) // Wait 1 second for initial page load

      return () => clearTimeout(timer)
    } else {
      console.log('📵 Network quality not fast enough, staying with compressed video')
    }
  }, [detectNetworkQuality, preloadHighQuality])

  return {
    src: state.currentSrc,
    poster,
    isHDReady: state.isHDReady,
    networkQuality: state.networkQuality
  }
}