import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatWeDoHero } from '@/components/what-we-do-hero'
import { ServicesSidebar } from '@/components/services-sidebar'
import { ServiceGrid } from '@/components/service-grid'

export default function WhatWeDoPage() {
  return (
    <main>
      <Header />
      <WhatWeDoHero />
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <ServicesSidebar />
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <ServiceGrid />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

