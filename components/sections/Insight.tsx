'use client'

import { ScrollReveal } from '@/components/ScrollReveal'

export function Insight() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <ScrollReveal>
        <blockquote className="text-3xl md:text-5xl font-medium text-center max-w-4xl leading-relaxed">
          "Users weren't uninterested—
          <br />
          <span className="text-neutral-400">they didn't know content existed."</span>
        </blockquote>
      </ScrollReveal>

      <ScrollReveal delay={0.3} className="mt-20 max-w-2xl text-center">
        <p className="text-lg text-neutral-600 leading-relaxed">
          The Now Feed was optimized for quick weather checks, not content exploration.
          Incremental optimization of individual cards would not solve the root problem.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.5} className="mt-12">
        <div className="inline-block px-6 py-3 border border-neutral-300 rounded-full">
          <span className="text-sm font-medium text-neutral-500">
            This was an information architecture failure
          </span>
        </div>
      </ScrollReveal>
    </section>
  )
}
