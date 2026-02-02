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
