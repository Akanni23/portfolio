import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceDetailHero } from '@/components/service-detail-hero'
import { ServiceContent } from '@/components/service-content'
import { RefreshCw } from 'lucide-react'

export default function SwapPage() {
  const content = {
    title: "SWAP",
    description: "Quick and easy cylinder exchange service",
    icon: RefreshCw,
    features: [
      "Instant cylinder exchange",
      "Quality checked cylinders",
      "Multiple cylinder sizes",
      "Safety inspection",
      "Convenient locations",
      "Quick service"
    ],
    details: `Our SWAP service offers a quick and convenient way to exchange your empty 
    gas cylinder for a filled one. All our exchange cylinders undergo rigorous safety 
    checks and quality assurance.`
  }

  return (
    <main>
      <Header />
      <ServiceDetailHero 
        title={content.title}
        description={content.description}
        icon={content.icon}
      />
      <ServiceContent 
        features={content.features}
        details={content.details}
      />
      <Footer />
    </main>
  )
}

