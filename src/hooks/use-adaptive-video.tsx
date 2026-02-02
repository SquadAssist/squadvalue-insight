import { useState, useEffect, useRef } from 'react'

interface AdaptiveVideoConfig {
  compressedSrc: string
  highQualitySrc: string
  poster?: string
}

export function useAdaptiveVideo({ compressedSrc, highQualitySrc, poster }: AdaptiveVideoConfig) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoSrc, setVideoSrc] = useState<string>('')
  const [networkQuality, setNetworkQuality] = useState<'slow' | 'fast' | 'testing'>('testing')
  const [isLoading, setIsLoading] = useState(true)

  // Check if URL is cross-origin
  const isCrossOrigin = (url: string): boolean => {
    try {
      const urlObj = new URL(url, window.location.href)
      return urlObj.origin !== window.location.origin
    } catch {
      return false
    }
  }

  // Helper function to set video source
  const setVideoSource = (src: string, quality: 'slow' | 'fast') => {
    setVideoSrc(src)
    setNetworkQuality(quality)
    setIsLoading(false)
    
    // Force video element to reload
    if (videoRef.current) {
      const video = videoRef.current
      video.pause()
      video.currentTime = 0
      video.src = src
      video.load()
    }
  }

  // Test network quality (connection-based only)
  const testNetworkQuality = (): 'slow' | 'fast' => {
    // Check for save data mode first - explicit user preference for low bandwidth
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      
      if (connection?.saveData) {
        return 'slow'
      }
      
      if (connection) {
        // Detect genuinely slow connections
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          return 'slow'
        }
        
        // Detect slow downlink speed
        if (connection.downlink && connection.downlink < 1.5) {
          return 'slow'
        }
        
        // All other cases with Network API available → FAST
        return 'fast'
      }
    }

    // No Network API available - default to HD since most modern connections can handle it
    return 'fast'
  }

  // Try to load HD video with retry logic
  const tryLoadHDVideo = async (retryCount = 0, maxRetries = 3): Promise<boolean> => {
    // Skip probes for cross-origin sources to avoid CORS issues
    if (isCrossOrigin(highQualitySrc)) {
      return true
    }
    
    try {
      const response = await fetch(highQualitySrc, { method: 'HEAD' })
      
      if (!response.ok) {
        if (retryCount < maxRetries) {
          const waitTime = (retryCount + 1) * 2000
          await new Promise(resolve => setTimeout(resolve, waitTime))
          return tryLoadHDVideo(retryCount + 1, maxRetries)
        } else {
          throw new Error(`HD file not accessible after ${maxRetries + 1} attempts`)
        }
      }
      
      return true
      
    } catch {
      return false
    }
  }

  // Load compressed video (fallback)
  const loadCompressedVideo = () => {
    setVideoSource(compressedSrc, 'slow')
  }

  // Main logic
  useEffect(() => {
    const executeAdaptiveLogic = async () => {
      const quality = testNetworkQuality()
      
      if (quality === 'fast') {
        const hdSuccess = await tryLoadHDVideo()
        
        if (hdSuccess) {
          setVideoSource(highQualitySrc, 'fast')
        } else {
          loadCompressedVideo()
        }
      } else {
        loadCompressedVideo()
      }
    }
    
    executeAdaptiveLogic()
  }, [compressedSrc, highQualitySrc])

  return {
    src: videoSrc,
    poster,
    networkQuality,
    ref: videoRef,
    isHDReady: networkQuality === 'fast',
    isLoading
  }
}
