'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { IPhoneFrame } from '@/components/IPhoneFrame'

export function BeforeVideo() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-[#0A0A0A]">
      <ScrollReveal>
        <h3 className="text-2xl md:text-3xl font-medium text-white/80 text-center mb-12">
          The Old Experience
        </h3>
      </ScrollReveal>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <ScrollReveal delay={0.2}>
          <IPhoneFrame
            videoSrc="/videos/before-old.mp4"
            caption="Content buried across 20+ cards in the Now Feed"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <IPhoneFrame
            videoSrc="/videos/before-old-2.mp4"
            caption="Scattered content across multiple screens"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
