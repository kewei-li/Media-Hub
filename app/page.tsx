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
