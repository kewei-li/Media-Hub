'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { VideoPlayer } from '@/components/VideoPlayer'

export function AfterVideo() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-[#0A0A0A]">
      <ScrollReveal>
        <h3 className="text-2xl md:text-3xl font-medium text-white/80 text-center mb-12">
          The New Experience
        </h3>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="w-full max-w-5xl">
        <VideoPlayer
          src="/videos/after.mp4"
          caption="One tap to all content—the Media Aggregation Center"
        />
      </ScrollReveal>
    </section>
  )
}
