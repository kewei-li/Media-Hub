'use client'

import { ScrollReveal } from '@/components/ScrollReveal'

export function Reflection() {
  const learnings = [
    {
      title: 'Structure unlocks value',
      desc: 'High-quality content has little impact if it never enters the user\'s primary path.',
    },
    {
      title: 'Zoom out to systems',
      desc: 'When feature tweaks stop moving metrics, the problem is structural.',
    },
    {
      title: 'Data calibrates, not justifies',
      desc: 'Even lightweight analysis can dramatically improve strategic confidence.',
    },
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Key Learnings
        </h2>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {learnings.map((item, i) => (
          <ScrollReveal key={i} delay={0.2 * (i + 1)}>
            <div className="p-8 border border-neutral-200 rounded-2xl h-full">
              <h4 className="text-xl font-medium">{item.title}</h4>
              <p className="text-neutral-500 mt-3 leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.8} className="mt-20 max-w-2xl text-center">
        <p className="text-xl text-neutral-600 leading-relaxed">
          Senior product impact comes from{' '}
          <span className="font-medium text-neutral-900">redefining systems</span>,
          not just shipping features.
        </p>
      </ScrollReveal>
    </section>
  )
}
