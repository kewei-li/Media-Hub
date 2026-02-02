'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function Impact() {
  const metrics = [
    { value: '20', suffix: '×', label: 'Content reads increase' },
    { value: '20', suffix: 'K', label: 'Projected DAU' },
    { value: '10', suffix: '×', label: 'Ad impression growth' },
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          Expected Impact
        </h2>
      </ScrollReveal>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {metrics.map((metric, i) => (
          <ScrollReveal key={i} delay={0.2 * (i + 1)} className="text-center">
            <div className="text-6xl md:text-8xl font-bold">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </div>
            <p className="text-lg text-neutral-500 mt-4">{metric.label}</p>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.8} className="mt-16">
        <p className="text-sm text-neutral-400 text-center max-w-md">
          Data-informed projections based on structural uplift analysis
        </p>
      </ScrollReveal>
    </section>
  )
}
