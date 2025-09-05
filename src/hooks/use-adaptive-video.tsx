import { useState, useEffect, useRef } from 'react'

interface AdaptiveVideoConfig {
  compressedSrc: string
  highQualitySrc: string
  poster?: string
}

export function useAdaptiveVideo({ compressedSrc, highQualitySrc, poster }: AdaptiveVideoConfig) {
  console.log('🎥 === ADAPTIVE VIDEO HOOK STARTED ===')
  console.log('📁 Video sources:', { compressedSrc, highQualitySrc })
  
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoSrc, setVideoSrc] = useState<string>('')
  const [networkQuality, setNetworkQuality] = useState<'slow' | 'fast' | 'testing'>('testing')

  // Step 1: Test network quality
  const testNetworkQuality = (): 'slow' | 'fast' => {
    console.log('🔍 === STEP 1: TESTING NETWORK QUALITY ===')
    
    // Check for save data mode first
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection?.saveData) {
        console.log('⚡ Save data mode enabled → SLOW')
        return 'slow'
      }
      
      if (connection) {
        console.log('📊 Network API data:', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        })
        
        // More aggressive fast detection
        if (connection.downlink > 2 || connection.effectiveType === '4g') {
          console.log('🚀 Good connection detected → FAST')
          return 'fast'
        }
      }
    }

    // Desktop fallback
    const isDesktop = window.innerWidth >= 1024
    console.log('💻 Desktop check:', { isDesktop, width: window.innerWidth })
    
    if (isDesktop) {
      console.log('🖥️ Desktop device → FAST')
      return 'fast'
    }
    
    console.log('📱 Mobile/poor connection → SLOW')
    return 'slow'
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
    console.log('🔄 Setting video source to:', compressedSrc)
    setVideoSrc(compressedSrc)
    setNetworkQuality('slow')
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
          console.log('✅ HD video will be used')
          console.log('🔄 Setting video source to:', highQualitySrc)
          setVideoSrc(highQualitySrc)
          setNetworkQuality('fast')
        } else {
          console.log('❌ HD failed, falling back to compressed')
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
    isHDReady: networkQuality === 'fast'
  }
}