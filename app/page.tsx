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
