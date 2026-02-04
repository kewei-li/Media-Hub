'use client'

import { useRef, useState } from 'react'

interface IPhoneFrameProps {
  videoSrc: string
  caption?: string
}

export function IPhoneFrame({ videoSrc, caption }: IPhoneFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().catch(() => {})
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="flex flex-col items-center">
      {/* iPhone 17 Pro Frame */}
      <div className="relative">
        {/* Outer frame with titanium-like finish */}
        <div className="relative bg-gradient-to-b from-[#3a3a3c] via-[#2c2c2e] to-[#1c1c1e] rounded-[55px] p-[3px] shadow-2xl">
          {/* Inner bezel */}
          <div className="relative bg-black rounded-[52px] p-[12px]">
            {/* Screen container */}
            <div className="relative overflow-hidden rounded-[40px] bg-black">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-black rounded-full w-[120px] h-[35px] mt-[10px] flex items-center justify-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#1a1a1a] mr-[8px]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#0a0a0a]" />
                </div>
              </div>

              {/* Video Screen */}
              <div className="relative w-[280px] h-[606px] md:w-[320px] md:h-[693px]">
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="w-8 h-8 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <video
                  ref={videoRef}
                  src={videoSrc}
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setIsLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>

            {/* Side buttons - Volume */}
            <div className="absolute left-[-3px] top-[120px] w-[3px] h-[30px] bg-[#3a3a3c] rounded-l-sm" />
            <div className="absolute left-[-3px] top-[160px] w-[3px] h-[60px] bg-[#3a3a3c] rounded-l-sm" />
            <div className="absolute left-[-3px] top-[230px] w-[3px] h-[60px] bg-[#3a3a3c] rounded-l-sm" />

            {/* Side button - Power */}
            <div className="absolute right-[-3px] top-[180px] w-[3px] h-[80px] bg-[#3a3a3c] rounded-r-sm" />
          </div>
        </div>

        {/* Subtle reflection */}
        <div className="absolute inset-0 rounded-[55px] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Play/Pause Button and Caption */}
      {caption && (
        <div className="flex items-center gap-4 mt-8 max-w-[280px] md:max-w-[320px]">
          <button
            onClick={togglePlay}
            className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
              </svg>
            )}
          </button>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {caption}
          </p>
        </div>
      )}
    </div>
  )
}
