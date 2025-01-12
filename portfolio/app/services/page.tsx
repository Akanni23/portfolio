import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicesHero } from '@/components/services-hero'
import { ServiceCard } from '@/components/service-card'
import { Truck, Fuel, Factory, RefreshCw } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: "Gas Services",
      description: "Professional gas services including installation, maintenance, and safety inspections",
      icon: Fuel,
      link: "/services/gas-services"
    },
    {
      title: "LPG Supply",
      description: "Reliable supply of LPG for residential and commercial use",
      icon: Factory,
      link: "/services/lpg-supply"
    },
    {
      title: "Mobile Delivery",
      description: "Convenient door-to-door gas delivery service",
      icon: Truck,
      link: "/services/mobile-delivery"
    },
    {
      title: "SWAP",
      description: "Quick and easy cylinder exchange service",
      icon: RefreshCw,
      link: "/services/swap"
    }
  ]

  return (
    <main>
      <Header />
      <ServicesHero />
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

