'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

interface VideoPlayerProps {
  src: string
  poster?: string
  caption?: string
}

export function VideoPlayer({ src, poster, caption }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: '-20%' })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <div ref={containerRef} className="relative w-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full max-w-4xl mx-auto rounded-lg shadow-2xl transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {caption && (
        <p className="text-center text-neutral-400 mt-6 text-sm">
          {caption}
        </p>
      )}
    </div>
  )
}
