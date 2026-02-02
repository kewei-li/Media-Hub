# Media Hub Case Study Website - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a standalone portfolio case study website showcasing the WeatherBug Media Aggregation Center project with immersive cinematic presentation.

**Architecture:** Single-page Next.js app with 9 full-viewport sections. Scroll-triggered animations via Framer Motion. Dark sections for video playback, light sections for content. Optimized for performance and mobile.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, shadcn/ui, Framer Motion, Vercel

---

## Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `tailwind.config.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`

**Step 1: Create Next.js project with Tailwind**

Run:
```bash
cd "/Users/kewei.li/Desktop/Vibe coding/2026/Media Hub"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

When prompted, accept defaults. This creates the base Next.js structure.

**Step 2: Verify project runs**

Run:
```bash
npm run dev
```

Expected: Server starts at localhost:3000, default Next.js page displays.

**Step 3: Commit**

```bash
git add .
git commit -m "feat: initialize Next.js project with Tailwind"
```

---

## Task 2: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install Framer Motion**

Run:
```bash
npm install framer-motion
```

**Step 2: Initialize shadcn/ui**

Run:
```bash
npx shadcn@latest init
```

When prompted:
- Style: Default
- Base color: Neutral
- CSS variables: Yes

**Step 3: Verify build works**

Run:
```bash
npm run build
```

Expected: Build completes successfully.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Framer Motion and shadcn/ui"
```

---

## Task 3: Set Up Base Layout and Typography

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Create: `app/fonts.ts`

**Step 1: Create fonts configuration**

Create `app/fonts.ts`:
```typescript
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

**Step 2: Update layout with fonts and metadata**

Replace `app/layout.tsx`:
```typescript
import type { Metadata } from 'next'
import { inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Media Aggregation Center | Case Study',
  description: 'Turning invisible content into a core product capability - A WeatherBug product case study',
  openGraph: {
    title: 'Media Aggregation Center | Case Study',
    description: 'Turning invisible content into a core product capability',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

**Step 3: Update global styles**

Replace `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #FAFAFA;
  --foreground: #1A1A1A;
  --background-dark: #0A0A0A;
  --foreground-dark: #FAFAFA;
}

body {
  background: var(--background);
  color: var(--foreground);
}

html {
  scroll-behavior: smooth;
}
```

**Step 4: Verify dev server shows blank page with correct font**

Run:
```bash
npm run dev
```

Expected: Page loads with Inter font applied.

**Step 5: Commit**

```bash
git add .
git commit -m "feat: configure typography and base styles"
```

---

## Task 4: Create ScrollReveal Animation Component

**Files:**
- Create: `components/ScrollReveal.tsx`

**Step 1: Create the ScrollReveal wrapper component**

Create `components/ScrollReveal.tsx`:
```typescript
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

**Step 2: Verify no build errors**

Run:
```bash
npm run build
```

Expected: Build succeeds.

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add ScrollReveal animation component"
```

---

## Task 5: Create Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Hero section component**

Create `components/sections/Hero.tsx`:
```typescript
'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-sm text-neutral-500 mb-8 tracking-wide"
      >
        KEWEI LI · PRODUCT OWNER / DESIGN LEAD
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-center max-w-4xl leading-tight"
      >
        Media Aggregation Center
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl md:text-2xl text-neutral-600 mt-6 text-center max-w-2xl"
      >
        Turning invisible content into a core product capability
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-neutral-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
```

**Step 2: Update page to use Hero**

Replace `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}
```

**Step 3: Verify Hero displays correctly**

Run:
```bash
npm run dev
```

Expected: Hero section with animated title, subtitle, and scroll indicator.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Hero section with animations"
```

---

## Task 6: Create Problem Section

**Files:**
- Create: `components/sections/Problem.tsx`
- Create: `components/AnimatedCounter.tsx`
- Modify: `app/page.tsx`

**Step 1: Create AnimatedCounter component**

Create `components/AnimatedCounter.tsx`:
```typescript
'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({ value, suffix = '', className = '' }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
      const duration = 1500
      const steps = 60
      const increment = numericValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(current.toFixed(2).replace(/\.?0+$/, ''))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  )
}
```

**Step 2: Create Problem section component**

Create `components/sections/Problem.tsx`:
```typescript
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
            <span>Articles scattered across 20+ weather-related cards</span>
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
```

**Step 3: Add Problem section to page**

Update `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
    </main>
  )
}
```

**Step 4: Verify Problem section displays**

Run:
```bash
npm run dev
```

Expected: Problem section appears below Hero with animated counter.

**Step 5: Commit**

```bash
git add .
git commit -m "feat: add Problem section with animated counter"
```

---

## Task 7: Create Video Player Component

**Files:**
- Create: `components/VideoPlayer.tsx`
- Create: `public/videos/.gitkeep`

**Step 1: Create VideoPlayer component**

Create `components/VideoPlayer.tsx`:
```typescript
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
```

**Step 2: Create videos directory placeholder**

Run:
```bash
mkdir -p "/Users/kewei.li/Desktop/Vibe coding/2026/Media Hub/public/videos"
touch "/Users/kewei.li/Desktop/Vibe coding/2026/Media Hub/public/videos/.gitkeep"
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add VideoPlayer component with auto-play on scroll"
```

---

## Task 8: Create BeforeVideo Section

**Files:**
- Create: `components/sections/BeforeVideo.tsx`
- Modify: `app/page.tsx`

**Step 1: Create BeforeVideo section**

Create `components/sections/BeforeVideo.tsx`:
```typescript
'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { VideoPlayer } from '@/components/VideoPlayer'

export function BeforeVideo() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-[#0A0A0A]">
      <ScrollReveal>
        <h3 className="text-2xl md:text-3xl font-medium text-white/80 text-center mb-12">
          The Old Experience
        </h3>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="w-full max-w-5xl">
        <VideoPlayer
          src="/videos/before.mp4"
          caption="Content buried across 20+ cards in the Now Feed"
        />
      </ScrollReveal>
    </section>
  )
}
```

**Step 2: Add BeforeVideo to page**

Update `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { BeforeVideo } from '@/components/sections/BeforeVideo'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <BeforeVideo />
    </main>
  )
}
```

**Step 3: Verify dark section displays**

Run:
```bash
npm run dev
```

Expected: Dark background section with video player (shows loading spinner without video file).

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add BeforeVideo section with dark background"
```

---

## Task 9: Create Insight Section

**Files:**
- Create: `components/sections/Insight.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Insight section**

Create `components/sections/Insight.tsx`:
```typescript
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
```

**Step 2: Add Insight to page**

Update `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { BeforeVideo } from '@/components/sections/BeforeVideo'
import { Insight } from '@/components/sections/Insight'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <BeforeVideo />
      <Insight />
    </main>
  )
}
```

**Step 3: Verify Insight section**

Run:
```bash
npm run dev
```

Expected: Quote section with staggered animations.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Insight section with key quote"
```

---

## Task 10: Create Solution Section

**Files:**
- Create: `components/sections/Solution.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Solution section**

Create `components/sections/Solution.tsx`:
```typescript
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
```

**Step 2: Add Solution to page**

Update `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { BeforeVideo } from '@/components/sections/BeforeVideo'
import { Insight } from '@/components/sections/Insight'
import { Solution } from '@/components/sections/Solution'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <BeforeVideo />
      <Insight />
      <Solution />
    </main>
  )
}
```

**Step 3: Verify Solution section**

Run:
```bash
npm run dev
```

Expected: Solution section with tab visualization and benefit cards.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Solution section with tab navigation visual"
```

---

## Task 11: Create AfterVideo Section

**Files:**
- Create: `components/sections/AfterVideo.tsx`
- Modify: `app/page.tsx`

**Step 1: Create AfterVideo section**

Create `components/sections/AfterVideo.tsx`:
```typescript
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
```

**Step 2: Add AfterVideo to page**

Update `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { BeforeVideo } from '@/components/sections/BeforeVideo'
import { Insight } from '@/components/sections/Insight'
import { Solution } from '@/components/sections/Solution'
import { AfterVideo } from '@/components/sections/AfterVideo'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <BeforeVideo />
      <Insight />
      <Solution />
      <AfterVideo />
    </main>
  )
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add AfterVideo section"
```

---

## Task 12: Create Impact Section

**Files:**
- Create: `components/sections/Impact.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Impact section**

Create `components/sections/Impact.tsx`:
```typescript
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
```

**Step 2: Add Impact to page**

Update `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { BeforeVideo } from '@/components/sections/BeforeVideo'
import { Insight } from '@/components/sections/Insight'
import { Solution } from '@/components/sections/Solution'
import { AfterVideo } from '@/components/sections/AfterVideo'
import { Impact } from '@/components/sections/Impact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <BeforeVideo />
      <Insight />
      <Solution />
      <AfterVideo />
      <Impact />
    </main>
  )
}
```

**Step 3: Verify Impact section**

Run:
```bash
npm run dev
```

Expected: Three large animated counters.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Impact section with animated metrics"
```

---

## Task 13: Create Reflection Section

**Files:**
- Create: `components/sections/Reflection.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Reflection section**

Create `components/sections/Reflection.tsx`:
```typescript
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
```

**Step 2: Add Reflection to page**

Update `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { BeforeVideo } from '@/components/sections/BeforeVideo'
import { Insight } from '@/components/sections/Insight'
import { Solution } from '@/components/sections/Solution'
import { AfterVideo } from '@/components/sections/AfterVideo'
import { Impact } from '@/components/sections/Impact'
import { Reflection } from '@/components/sections/Reflection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <BeforeVideo />
      <Insight />
      <Solution />
      <AfterVideo />
      <Impact />
      <Reflection />
    </main>
  )
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add Reflection section with key learnings"
```

---

## Task 14: Create Footer Section

**Files:**
- Create: `components/sections/Footer.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Footer section**

Create `components/sections/Footer.tsx`:
```typescript
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
```

**Step 2: Add Footer to page**

Update `app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { BeforeVideo } from '@/components/sections/BeforeVideo'
import { Insight } from '@/components/sections/Insight'
import { Solution } from '@/components/sections/Solution'
import { AfterVideo } from '@/components/sections/AfterVideo'
import { Impact } from '@/components/sections/Impact'
import { Reflection } from '@/components/sections/Reflection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <BeforeVideo />
      <Insight />
      <Solution />
      <AfterVideo />
      <Impact />
      <Reflection />
      <Footer />
    </main>
  )
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add Footer section"
```

---

## Task 15: Final Polish and Build Verification

**Files:**
- Modify: `app/layout.tsx` (add OG image meta if needed)
- Verify all sections

**Step 1: Run production build**

Run:
```bash
npm run build
```

Expected: Build completes with no errors.

**Step 2: Test production build locally**

Run:
```bash
npm run start
```

Expected: Site runs at localhost:3000 with all sections working.

**Step 3: Verify mobile responsiveness**

Open browser dev tools, test at mobile viewport sizes.

**Step 4: Final commit**

```bash
git add .
git commit -m "chore: verify production build"
```

---

## Task 16: Deploy to Vercel

**Step 1: Install Vercel CLI (if needed)**

Run:
```bash
npm install -g vercel
```

**Step 2: Deploy**

Run:
```bash
vercel
```

Follow prompts:
- Link to existing project or create new
- Use default settings

**Step 3: Get production URL**

Run:
```bash
vercel --prod
```

Expected: Returns production URL (e.g., mediahub-casestudy.vercel.app)

**Step 4: Commit deployment config**

```bash
git add .
git commit -m "chore: add Vercel deployment"
```

---

## Post-Implementation: Add Video Files

After implementation, add your video files:

1. Copy `before.mp4` to `public/videos/before.mp4`
2. Copy `after.mp4` to `public/videos/after.mp4`
3. Run `npm run dev` to test
4. Commit and redeploy

---

## Success Criteria

- [ ] All 9 sections render correctly
- [ ] Scroll animations trigger smoothly
- [ ] Videos auto-play when in viewport
- [ ] Animated counters work
- [ ] Responsive on mobile
- [ ] Production build succeeds
- [ ] Deployed to Vercel
