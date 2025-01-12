import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AccessoriesHero } from '@/components/accessories-hero'
import { ProductGrid } from '@/components/product-grid'

export default function AccessoriesPage() {
  return (
    <main>
      <Header />
      <AccessoriesHero />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold mb-8">Order your accessories</h1>
        <ProductGrid />
      </section>
      <Footer />
    </main>
  )
}

