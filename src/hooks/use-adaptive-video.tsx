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
  const [debugInfo, setDebugInfo] = useState<any>({})

  // Add cache-busting parameter to URLs
  const addCacheBuster = (url: string) => {
    const cacheBuster = `?cb=${Date.now()}&debug=1`
    return url + cacheBuster
  }

  // Fetch file size for debugging
  const getFileSize = async (url: string): Promise<number> => {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      const contentLength = response.headers.get('content-length')
      return contentLength ? parseInt(contentLength) : 0
    } catch {
      return 0
    }
  }

  // Helper function to safely set video source with explicit debugging
  const setVideoSource = async (src: string, quality: 'slow' | 'fast') => {
    console.log(`🚨🚨🚨 === EXPLICIT DEBUG: SETTING VIDEO SOURCE ===`)
    console.log(`🎬 BEFORE SETTING - Current videoSrc state: ${videoSrc}`)
    console.log(`📹 NEW Target source: ${src}`)
    console.log(`🎯 Expected quality: ${quality}`)
    console.log(`🌍 Context: ${window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'}`)
    console.log(`📅 Timestamp: ${new Date().toISOString()}`)
    
    // Test if both files are actually different
    console.log('🔍 TESTING IF FILES ARE ACTUALLY DIFFERENT...')
    const [compressedResponse, hdResponse] = await Promise.all([
      fetch(compressedSrc, { method: 'HEAD' }).catch(e => ({ ok: false, error: e.message })),
      fetch(highQualitySrc, { method: 'HEAD' }).catch(e => ({ ok: false, error: e.message }))
    ])
    
    const compressedSize = (compressedResponse.ok && 'headers' in compressedResponse) ? compressedResponse.headers?.get('content-length') : 'ERROR'
    const hdSize = (hdResponse.ok && 'headers' in hdResponse) ? hdResponse.headers?.get('content-length') : 'ERROR'
    
    console.log('🚨 CRITICAL FILE SIZE CHECK:', {
      compressedFile: `${compressedSrc} = ${compressedSize ? (parseInt(compressedSize) / 1024 / 1024).toFixed(2) + ' MB' : 'UNKNOWN'}`,
      hdFile: `${highQualitySrc} = ${hdSize ? (parseInt(hdSize) / 1024 / 1024).toFixed(2) + ' MB' : 'UNKNOWN'}`,
      areDifferent: compressedSize !== hdSize,
      selectedFile: `${src} (expecting ${quality} quality)`
    })
    
    // Check if files are the same size (indicating they might be the same file)
    if (compressedSize === hdSize && compressedSize !== 'ERROR') {
      console.error('🚨🚨🚨 CRITICAL ISSUE: BOTH FILES HAVE SAME SIZE! They might be the same file!')
    }
    
    // Add cache buster
    const cacheBustedSrc = `${src}?cb=${Date.now()}&debug=explicit`
    console.log('🔧 Cache-busted URL:', cacheBustedSrc)
    
    setVideoSrc(cacheBustedSrc)
    setNetworkQuality(quality)
    setIsLoading(false)
    
    // Force video element to reload with comprehensive debugging
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
      
      // Add comprehensive event listeners for debugging
      const debugEvents = ['loadstart', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'error', 'abort', 'stalled', 'suspend', 'waiting']
      debugEvents.forEach(eventName => {
        video.addEventListener(eventName, (e) => {
          console.log(`🎥 VIDEO EVENT [${eventName}]:`, {
            src: video.src,
            currentSrc: video.currentSrc,
            readyState: video.readyState,
            networkState: video.networkState,
            videoWidth: video.videoWidth,
            videoHeight: video.videoHeight,
            duration: video.duration,
            error: video.error
          })
        }, { once: true })
      })
      
      // Pause and reset before changing source
      video.pause()
      video.currentTime = 0
      
      // Change source and reload
      video.src = cacheBustedSrc
      video.load()
      
      console.log('🎬 IMMEDIATELY AFTER reload - Video element state:', {
        src: video.src,
        currentSrc: video.currentSrc,
        readyState: video.readyState,
        networkState: video.networkState
      })
      
      // Check again after delays to see what actually loaded
      setTimeout(async () => {
        console.log('🎬 AFTER 1s DELAY - Video element state:', {
          src: video.src,
          currentSrc: video.currentSrc,
          readyState: video.readyState,
          networkState: video.networkState,
          videoWidth: video.videoWidth,
          videoHeight: video.videoHeight,
          duration: video.duration
        })
        
        // Try to determine actual quality by checking video dimensions
        if (video.videoWidth && video.videoHeight) {
          const resolution = `${video.videoWidth}x${video.videoHeight}`
          console.log(`🎥 ACTUAL VIDEO RESOLUTION: ${resolution}`)
          
          // Fetch actual file size of what was loaded
          try {
            const actualResponse = await fetch(video.currentSrc || video.src, { method: 'HEAD' })
            const actualSize = actualResponse.headers.get('content-length')
            console.log(`📏 ACTUAL LOADED FILE SIZE: ${actualSize ? (parseInt(actualSize) / 1024 / 1024).toFixed(2) + ' MB' : 'Unknown'}`)
          } catch (e) {
            console.log('❌ Could not fetch actual file size:', e)
          }
          
          // Log if there's a mismatch between expected and actual
          if (quality === 'fast' && video.videoWidth < 1280) {
            console.error('❌ CRITICAL MISMATCH: Expected HD but got lower resolution!', {
              expected: 'HD (>=1280px width)',
              actual: `${video.videoWidth}x${video.videoHeight}`,
              expectedSrc: highQualitySrc,
              actualSrc: video.currentSrc || video.src
            })
          } else if (quality === 'slow' && video.videoWidth >= 1280) {
            console.error('❌ CRITICAL MISMATCH: Expected compressed but got HD resolution!', {
              expected: 'Compressed (<1280px width)',
              actual: `${video.videoWidth}x${video.videoHeight}`,
              expectedSrc: compressedSrc,
              actualSrc: video.currentSrc || video.src
            })
          } else {
            console.log('✅ Video quality matches expectation')
          }
        }
        
        // Store debug info in state
        setDebugInfo({
          expectedQuality: quality,
          expectedSrc: src,
          cacheBustedSrc,
          actualSrc: video.currentSrc || video.src,
          resolution: video.videoWidth && video.videoHeight ? `${video.videoWidth}x${video.videoHeight}` : 'Unknown',
          readyState: video.readyState,
          networkState: video.networkState,
          context: window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'
        })
      }, 1000)
      
      // Additional check after 3 seconds for slower networks
      setTimeout(() => {
        console.log('🎬 AFTER 3s DELAY - Final video state:', {
          src: video.src,
          currentSrc: video.currentSrc,
          readyState: video.readyState,
          networkState: video.networkState,
          videoWidth: video.videoWidth,
          videoHeight: video.videoHeight,
          duration: video.duration,
          error: video.error
        })
      }, 3000)
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

  // Step 2: Try to load HD video with comprehensive debugging
  const tryLoadHDVideo = async (): Promise<boolean> => {
    console.log('🎬 === STEP 2: ATTEMPTING HD VIDEO LOAD ===')
    
    try {
      // First check if file exists and get detailed info
      console.log('📋 Checking HD file accessibility...')
      const response = await fetch(highQualitySrc, { method: 'HEAD' })
      
      console.log('📋 HD file check result:', {
        status: response.status,
        ok: response.ok,
        contentLength: response.headers.get('content-length'),
        contentType: response.headers.get('content-type'),
        lastModified: response.headers.get('last-modified'),
        etag: response.headers.get('etag'),
        cacheControl: response.headers.get('cache-control')
      })
      
      // Also check the compressed file for comparison
      const compressedResponse = await fetch(compressedSrc, { method: 'HEAD' })
      console.log('📋 Compressed file check result:', {
        status: compressedResponse.status,
        ok: compressedResponse.ok,
        contentLength: compressedResponse.headers.get('content-length'),
        contentType: compressedResponse.headers.get('content-type')
      })
      
      if (!response.ok) {
        throw new Error(`HD file not accessible: ${response.status} ${response.statusText}`)
      }
      
      console.log('✅ HD file is accessible')
      
      // Test actual network download speed by downloading a small chunk
      console.log('🔄 Testing network download speed...')
      const startTime = Date.now()
      const testResponse = await fetch(highQualitySrc, { 
        headers: { 'Range': 'bytes=0-1023' } // First 1KB
      })
      const downloadTime = Date.now() - startTime
      console.log('⚡ Network test result:', {
        downloadTime: `${downloadTime}ms`,
        status: testResponse.status,
        bytesDownloaded: 1024,
        estimatedSpeed: `${(1024 / downloadTime * 1000 / 1024).toFixed(2)} KB/s`
      })
      
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

  // Main logic with retry mechanism
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
          console.log('❌ === INITIAL HD ATTEMPT FAILED - LOADING COMPRESSED FIRST ===')
          console.log(`🌍 Context: ${window !== window.top ? 'IFRAME' : 'SEPARATE_TAB'}`)
          console.log(`📁 Compressed Source: ${compressedSrc}`)
          loadCompressedVideo()
          
          // Retry HD video after 3 seconds in case it was a temporary server issue
          console.log('🔄 === SCHEDULING HD RETRY IN 3 SECONDS ===')
          setTimeout(async () => {
            console.log('🔄 === RETRYING HD VIDEO AFTER DELAY ===')
            const retryHDSuccess = await tryLoadHDVideo()
            if (retryHDSuccess) {
              console.log('✅ === HD VIDEO LOADED ON RETRY - SWITCHING TO HD ===')
              setVideoSource(highQualitySrc, 'fast')
            } else {
              console.log('❌ === HD VIDEO STILL FAILED ON RETRY ===')
            }
          }, 3000)
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
    isLoading,
    debugInfo // Add debug info for troubleshooting
  }
}