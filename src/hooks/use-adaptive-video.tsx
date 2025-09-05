import { useState, useEffect, useRef } from 'react'

interface AdaptiveVideoConfig {
  compressedSrc: string
  highQualitySrc: string
  poster?: string
}

export function useAdaptiveVideo({ compressedSrc, highQualitySrc, poster }: AdaptiveVideoConfig) {
  console.log('🎥 === ADAPTIVE VIDEO HOOK STARTED ===')
  console.log('📁 Video sources:', { compressedSrc, highQualitySrc })
  console.log('🌍 CONTEXT DEBUG:', {
    isInIframe: window !== window.top,
    userAgent: navigator.userAgent,
    windowSize: { width: window.innerWidth, height: window.innerHeight },
    location: window.location.href,
    referrer: document.referrer
  })
  
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoSrc, setVideoSrc] = useState<string>('')
  const [networkQuality, setNetworkQuality] = useState<'slow' | 'fast' | 'testing'>('testing')
  const [isLoading, setIsLoading] = useState(true)

  // Helper function to safely set video source and reload
  const setVideoSource = (src: string, quality: 'slow' | 'fast') => {
    console.log(`🔄 === SETTING VIDEO SOURCE ===`)
    console.log(`📹 Target source: ${src}`)
    console.log(`🎯 Quality: ${quality}`)
    console.log(`🌍 Context: ${window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'}`)
    
    setVideoSrc(src)
    setNetworkQuality(quality)
    setIsLoading(false)
    
    // Force video element to reload with new source
    if (videoRef.current) {
      const video = videoRef.current
      console.log('🎬 BEFORE reload - Video element state:', {
        src: video.src,
        currentSrc: video.currentSrc,
        readyState: video.readyState,
        networkState: video.networkState,
        paused: video.paused,
        currentTime: video.currentTime
      })
      
      // Pause and reset before changing source
      video.pause()
      video.currentTime = 0
      
      // Change source and reload
      video.src = src
      video.load()
      
      console.log('🎬 IMMEDIATELY AFTER reload - Video element state:', {
        src: video.src,
        currentSrc: video.currentSrc,
        readyState: video.readyState,
        networkState: video.networkState
      })
      
      // Check again after a delay
      setTimeout(() => {
        console.log('🎬 AFTER DELAY - Video element state:', {
          src: video.src,
          currentSrc: video.currentSrc,
          readyState: video.readyState,
          networkState: video.networkState,
          videoWidth: video.videoWidth,
          videoHeight: video.videoHeight,
          duration: video.duration
        })
        
        // Try to determine actual quality by checking video dimensions or file size
        if (video.videoWidth && video.videoHeight) {
          const resolution = `${video.videoWidth}x${video.videoHeight}`
          console.log(`🎥 ACTUAL VIDEO RESOLUTION: ${resolution}`)
          
          // Log if there's a mismatch
          if (quality === 'fast' && video.videoWidth < 1280) {
            console.error('❌ MISMATCH DETECTED: Expected HD but got lower resolution!')
          } else if (quality === 'slow' && video.videoWidth >= 1280) {
            console.error('❌ MISMATCH DETECTED: Expected compressed but got HD resolution!')
          } else {
            console.log('✅ Video quality matches expectation')
          }
        }
      }, 1000)
    }
  }

  // Step 1: Test network quality (connection-based only)
  const testNetworkQuality = (): 'slow' | 'fast' => {
    console.log('🔍 === STEP 1: TESTING CONNECTION QUALITY ===')
    console.log('📍 Context:', {
      isInIframe: window !== window.top,
      windowWidth: window.innerWidth,
      userAgent: navigator.userAgent.slice(0, 50) + '...'
    })
    
    // Check for save data mode first - explicit user preference for low bandwidth
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      
      if (connection?.saveData) {
        console.log('⚡ Save data mode enabled → SLOW (user preference)')
        return 'slow'
      }
      
      if (connection) {
        console.log('📊 DETAILED Network Connection API data:', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
          type: connection.type,
          onchange: typeof connection.onchange,
          context: window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'
        })
        
        // Detect genuinely slow connections
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          console.log('🐌 Very slow connection detected → SLOW')
          return 'slow'
        }
        
        // Detect slow downlink speed
        if (connection.downlink && connection.downlink < 1.5) {
          console.log('📉 Low bandwidth detected → SLOW')
          return 'slow'
        }
        
        // All other cases with Network API available → FAST
        console.log('🚀 Connection quality acceptable → FAST')
        return 'fast'
      }
    }

    // No Network API available - default to HD since most modern connections can handle it
    console.log('❓ Network API unavailable → FAST (default to HD)')
    return 'fast'
  }

  // Step 2: Try to load HD video
  const tryLoadHDVideo = async (): Promise<boolean> => {
    console.log('🎬 === STEP 2: ATTEMPTING HD VIDEO LOAD ===')
    
    try {
      // First check if file exists
      console.log('📋 Checking HD file accessibility...')
      const response = await fetch(highQualitySrc, { method: 'HEAD' })
      
      console.log('📋 HD file check result:', {
        status: response.status,
        ok: response.ok,
        contentLength: response.headers.get('content-length'),
        contentType: response.headers.get('content-type')
      })
      
      if (!response.ok) {
        throw new Error(`HD file not accessible: ${response.status} ${response.statusText}`)
      }
      
      console.log('✅ HD file is accessible')
      return true
      
    } catch (error) {
      console.error('❌ HD video load failed:', error)
      return false
    }
  }

  // Step 3: Load compressed video (fallback)
  const loadCompressedVideo = () => {
    console.log('📦 === STEP 3: LOADING COMPRESSED VIDEO ===')
    setVideoSource(compressedSrc, 'slow')
  }

  // Main logic
  useEffect(() => {
    console.log('🚀 === MAIN ADAPTIVE VIDEO LOGIC STARTED ===')
    
    const executeAdaptiveLogic = async () => {
      // Step 1: Test network
      const quality = testNetworkQuality()
      console.log(`🌐 Network quality result: ${quality}`)
      
      if (quality === 'fast') {
        // Step 2: Try HD video
        console.log('⚡ Fast connection - attempting HD video...')
        const hdSuccess = await tryLoadHDVideo()
        
        if (hdSuccess) {
          console.log('✅ === FINAL DECISION: HD VIDEO ===')
          console.log(`🌍 Context: ${window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'}`)
          console.log(`📁 HD Source: ${highQualitySrc}`)
          setVideoSource(highQualitySrc, 'fast')
        } else {
          console.log('❌ === FINAL DECISION: COMPRESSED VIDEO ===')
          console.log(`🌍 Context: ${window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'}`)
          console.log(`📁 Compressed Source: ${compressedSrc}`)
          loadCompressedVideo()
        }
      } else {
        // Step 3: Use compressed
        console.log('🐌 Slow connection - using compressed video')
        loadCompressedVideo()
      }
    }
    
    executeAdaptiveLogic()
  }, [compressedSrc, highQualitySrc])

  // Debug current state
  console.log('📊 Current hook state:', { videoSrc, networkQuality })
  console.log('📤 Returning video source:', videoSrc)

  return {
    src: videoSrc,
    poster,
    networkQuality,
    ref: videoRef,
    isHDReady: networkQuality === 'fast',
    isLoading
  }
}