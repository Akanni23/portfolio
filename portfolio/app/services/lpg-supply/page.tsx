import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceDetailHero } from '@/components/service-detail-hero'
import { ServiceContent } from '@/components/service-content'
import { Factory } from 'lucide-react'

export default function LPGSupplyPage() {
  const content = {
    title: "LPG Supply",
    description: "Reliable LPG supply for all your needs",
    icon: Factory,
    features: [
      "Residential LPG supply",
      "Commercial LPG solutions",
      "Bulk storage facilities",
      "Regular supply schedule",
      "Quality assurance",
      "Competitive pricing"
    ],
    details: `We provide reliable LPG supply services for both residential and commercial customers. 
    Our state-of-the-art facilities and efficient distribution network ensure consistent 
    supply of high-quality LPG whenever you need it.`
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

