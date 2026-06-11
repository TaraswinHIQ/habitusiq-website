import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Vision } from '@/components/vision'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <Features />
      <Vision />
      <SiteFooter />
    </main>
  )
}
