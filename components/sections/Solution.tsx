'use client'

import { ScrollReveal } from '@/components/ScrollReveal'

export function Solution() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl font-bold text-center max-w-3xl">
          A dedicated home for content
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-16">
        <div className="flex items-center gap-2 md:gap-4 px-4 py-3 bg-neutral-100 rounded-2xl">
          {['Now', 'Hourly', 'Daily', 'Maps', 'Media'].map((tab, i) => (
            <div
              key={tab}
              className={`px-4 md:px-6 py-2 rounded-xl text-sm md:text-base font-medium transition-all ${
                tab === 'Media'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4} className="mt-12 max-w-xl text-center">
        <p className="text-lg text-neutral-600 leading-relaxed">
          Elevate content from a scattered attachment to a{' '}
          <span className="font-medium text-neutral-900">first-class entry point</span>—
          a dedicated 5th tab for the Media Aggregation Center.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.6} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
        {[
          { title: 'Clear mental model', desc: 'For information consumption' },
          { title: 'Improved discoverability', desc: 'One tap to all content' },
          { title: 'Scalable foundation', desc: 'For personalization & monetization' },
        ].map((item, i) => (
          <div key={i} className="text-center p-6">
            <h4 className="font-medium text-neutral-900">{item.title}</h4>
            <p className="text-sm text-neutral-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </ScrollReveal>
    </section>
  )
}
