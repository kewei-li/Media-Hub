'use client'

import { ScrollReveal } from '@/components/ScrollReveal'

export function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <ScrollReveal>
          <div>
            <h3 className="text-xl font-medium">Kewei Li</h3>
            <p className="text-neutral-500 mt-1">Product Owner / Design Lead</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex gap-6">
            <a
              href="mailto:your@email.com"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-100">
        <p className="text-center text-sm text-neutral-400">
          WeatherBug Case Study · Jan–Mar 2024
        </p>
      </div>
    </footer>
  )
}
