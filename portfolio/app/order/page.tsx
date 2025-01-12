import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { OrderHero } from '@/components/order-hero'
import { ProductDetails } from '@/components/product-details'

export default function OrderPage() {
  return (
    <main>
      <Header />
      <OrderHero />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold mb-8">Order a refill</h1>
        <ProductDetails />
      </section>
      <Footer />
    </main>
  )
}

