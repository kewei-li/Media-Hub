'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function Problem() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl font-bold text-center max-w-3xl">
          Content existed—but was invisible
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-16 text-center">
        <div className="text-7xl md:text-9xl font-bold text-neutral-300">
          <AnimatedCounter value="0.02" suffix="%" />
        </div>
        <p className="text-lg text-neutral-500 mt-4">
          Weather News share of total page views
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4} className="mt-16 max-w-2xl">
        <ul className="space-y-4 text-lg text-neutral-600">
          <li className="flex items-start gap-3">
            <span className="text-neutral-400 mt-1">•</span>
            <span>Featured videos buried in a single card, positioned far down the feed</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-neutral-400 mt-1">•</span>
            <span>Articles scattered across 8 weather-related cards</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-neutral-400 mt-1">•</span>
            <span>Most content cards reaching only ~1K daily active users</span>
          </li>
        </ul>
      </ScrollReveal>
    </section>
  )
}
