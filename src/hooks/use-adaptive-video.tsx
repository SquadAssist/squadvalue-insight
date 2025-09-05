import { useState, useEffect, useCallback, useRef } from 'react'

interface AdaptiveVideoConfig {
  compressedSrc: string
  highQualitySrc: string
  poster?: string
}

interface AdaptiveVideoState {
  currentSrc: string
  isHDReady: boolean
  networkQuality: 'slow' | 'fast' | 'unknown'
  shouldUpgradeOnLoop: boolean
}

export function useAdaptiveVideo({ compressedSrc, highQualitySrc, poster }: AdaptiveVideoConfig) {
  console.log('🎥 useAdaptiveVideo hook initialized', { compressedSrc, highQualitySrc })
  
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [state, setState] = useState<AdaptiveVideoState>({
    currentSrc: compressedSrc,
    isHDReady: false,
    networkQuality: 'unknown',
    shouldUpgradeOnLoop: false
  })

  const detectNetworkQuality = useCallback((): 'slow' | 'fast' | 'unknown' => {
    console.log('🔍 Detecting network quality...')
    
    // Check Network Information API
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection) {
        const effectiveType = connection.effectiveType
        const saveData = connection.saveData
        const downlink = connection.downlink
        
        console.log('📊 Network Info:', { effectiveType, saveData, downlink })
        
        if (saveData) {
          console.log('⚡ Save data enabled - using compressed video')
          return 'slow'
        }
        
        // Fast connection: 4G with good downlink OR high downlink speed
        if (effectiveType === '4g' && downlink > 1.5) {
          console.log('🚀 Fast connection detected - will use HD immediately')
          return 'fast'
        }
      }
    }

    // Fallback: Desktop users likely have good connections
    const isDesktop = window.innerWidth >= 1024
    console.log('📱 Device info:', { isDesktop, width: window.innerWidth })
    
    if (isDesktop) {
      console.log('💻 Desktop detected - defaulting to HD')
      return 'fast'
    }
    
    return 'slow'
  }, [])

  const preloadHDForNextLoop = useCallback(() => {
    console.log('🎬 Preloading HD video for next loop:', highQualitySrc)
    
    const video = document.createElement('video')
    video.preload = 'auto'
    video.src = highQualitySrc
    
    const handleReady = () => {
      console.log('✅ HD video preloaded successfully - ready for next loop')
      setState(prev => ({ ...prev, isHDReady: true, shouldUpgradeOnLoop: true }))
      cleanup()
    }
    
    const handleError = () => {
      console.warn('❌ Failed to preload HD video')
      cleanup()
    }
    
    const cleanup = () => {
      video.removeEventListener('canplaythrough', handleReady)
      video.removeEventListener('error', handleError)
    }

    video.addEventListener('canplaythrough', handleReady)
    video.addEventListener('error', handleError)
    
    // Cleanup timeout
    setTimeout(cleanup, 15000)
  }, [highQualitySrc])

  const handleVideoLoop = useCallback(() => {
    if (state.shouldUpgradeOnLoop && state.isHDReady) {
      console.log('🔄 Video looped - upgrading to HD quality')
      setState(prev => ({ 
        ...prev, 
        currentSrc: highQualitySrc, 
        shouldUpgradeOnLoop: false 
      }))
    }
  }, [state.shouldUpgradeOnLoop, state.isHDReady, highQualitySrc])

  useEffect(() => {
    console.log('🚀 useEffect triggered for adaptive video')
    
    const quality = detectNetworkQuality()
    console.log('🌐 Network quality detected:', quality)
    
    if (quality === 'fast') {
      // Fast connection: Use HD immediately
      console.log('⚡ Fast connection - using HD video immediately')
      setState(prev => ({ 
        ...prev, 
        networkQuality: quality, 
        currentSrc: highQualitySrc,
        isHDReady: true 
      }))
    } else {
      // Slow connection: Start with compressed, preload HD for next loop
      console.log('🐌 Slow connection - starting with compressed, preloading HD')
      setState(prev => ({ ...prev, networkQuality: quality }))
      setTimeout(() => {
        preloadHDForNextLoop()
      }, 2000) // Wait 2 seconds before starting HD preload
    }
  }, [detectNetworkQuality, preloadHDForNextLoop, highQualitySrc])

  return {
    src: state.currentSrc,
    poster,
    isHDReady: state.isHDReady,
    networkQuality: state.networkQuality,
    onLoop: handleVideoLoop,
    ref: videoRef
  }
}