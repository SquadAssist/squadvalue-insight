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
    
    // First, check if the HD video file exists by trying to fetch it
    fetch(highQualitySrc, { method: 'HEAD' })
      .then(response => {
        console.log('📋 HD video file check:', {
          url: highQualitySrc,
          status: response.status,
          statusText: response.statusText,
          contentLength: response.headers.get('content-length'),
          contentType: response.headers.get('content-type')
        })
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
      })
      .catch(error => {
        console.error('❌ HD video file not accessible:', error)
        return
      })
    
    const video = document.createElement('video')
    video.preload = 'auto'
    video.src = highQualitySrc
    
    // Add comprehensive event listeners for debugging
    const handleLoadStart = () => {
      console.log('🔄 HD video loading started')
    }
    
    const handleProgress = (e: Event) => {
      const video = e.target as HTMLVideoElement
      if (video.buffered.length > 0) {
        const buffered = video.buffered.end(0)
        const duration = video.duration || 0
        const percent = duration > 0 ? (buffered / duration * 100).toFixed(1) : 0
        console.log(`📊 HD video loading progress: ${percent}% (${buffered.toFixed(1)}s of ${duration.toFixed(1)}s)`)
      }
    }
    
    const handleLoadedMetadata = () => {
      console.log('📏 HD video metadata loaded:', {
        duration: video.duration,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        readyState: video.readyState
      })
    }
    
    const handleCanPlay = () => {
      console.log('▶️ HD video can start playing (canplay event)')
    }
    
    const handleCanPlayThrough = () => {
      console.log('✅ HD video preloaded successfully - ready for next loop')
      setState(prev => ({ ...prev, isHDReady: true, shouldUpgradeOnLoop: true }))
      cleanup()
    }
    
    const handleError = (e: Event) => {
      const video = e.target as HTMLVideoElement
      const error = video.error
      console.error('❌ HD video preload failed:', {
        code: error?.code,
        message: error?.message,
        networkState: video.networkState,
        readyState: video.readyState,
        src: video.src
      })
      
      // Log specific error codes
      if (error?.code === MediaError.MEDIA_ERR_ABORTED) {
        console.error('🛑 Video loading aborted by user')
      } else if (error?.code === MediaError.MEDIA_ERR_NETWORK) {
        console.error('🌐 Network error while loading video')
      } else if (error?.code === MediaError.MEDIA_ERR_DECODE) {
        console.error('🔧 Video decode error - file may be corrupted')
      } else if (error?.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
        console.error('📂 Video format not supported or file not found')
      }
      
      cleanup()
    }
    
    const handleStalled = () => {
      console.warn('⏸️ HD video loading stalled')
    }
    
    const handleSuspend = () => {
      console.log('⏱️ HD video loading suspended')
    }
    
    // Extended timeout for larger files
    const timeoutId = setTimeout(() => {
      console.warn('⏰ HD video preload timeout after 30 seconds')
      cleanup()
    }, 30000)
    
    const cleanup = () => {
      clearTimeout(timeoutId)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('progress', handleProgress)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('error', handleError)
      video.removeEventListener('stalled', handleStalled)
      video.removeEventListener('suspend', handleSuspend)
    }

    // Add all event listeners
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('progress', handleProgress)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('error', handleError)
    video.addEventListener('stalled', handleStalled)
    video.addEventListener('suspend', handleSuspend)
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