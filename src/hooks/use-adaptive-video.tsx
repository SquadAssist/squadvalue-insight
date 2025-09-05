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
    // Check if user prefers reduced data
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection) {
        // Use Network Information API
        const effectiveType = connection.effectiveType
        const saveData = connection.saveData
        
        if (saveData) return 'slow'
        
        if (effectiveType === '4g' && connection.downlink > 2) return 'fast'
        if (effectiveType === '3g' || effectiveType === '2g' || effectiveType === 'slow-2g') return 'slow'
      }
    }

    // Fallback: check device type and screen size
    const isMobile = window.innerWidth < 768
    const isLowEnd = 'deviceMemory' in navigator && (navigator as any).deviceMemory < 4
    
    if (isMobile || isLowEnd) return 'slow'
    
    return 'fast'
  }, [])

  const preloadHighQuality = useCallback(() => {
    if (state.isHDReady) return

    const video = document.createElement('video')
    video.preload = 'metadata'
    video.src = highQualitySrc
    
    const handleCanPlay = () => {
      setState(prev => ({ ...prev, isHDReady: true, currentSrc: highQualitySrc }))
      video.removeEventListener('canplaythrough', handleCanPlay)
    }
    
    const handleError = () => {
      console.warn('Failed to preload HD video, staying with compressed version')
      video.removeEventListener('error', handleError)
    }

    video.addEventListener('canplaythrough', handleCanPlay)
    video.addEventListener('error', handleError)
    
    // Cleanup timeout
    setTimeout(() => {
      video.removeEventListener('canplaythrough', handleCanPlay)
      video.removeEventListener('error', handleError)
    }, 10000) // 10 second timeout
  }, [highQualitySrc, state.isHDReady])

  useEffect(() => {
    // Initial network quality detection
    const quality = detectNetworkQuality()
    setState(prev => ({ ...prev, networkQuality: quality }))

    // If network is fast, preload HD version after a short delay
    if (quality === 'fast') {
      const timer = setTimeout(() => {
        preloadHighQuality()
      }, 1000) // Wait 1 second for initial page load

      return () => clearTimeout(timer)
    }
  }, [detectNetworkQuality, preloadHighQuality])

  return {
    src: state.currentSrc,
    poster,
    isHDReady: state.isHDReady,
    networkQuality: state.networkQuality
  }
}