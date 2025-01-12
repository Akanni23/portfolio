import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceDetailHero } from '@/components/service-detail-hero'
import { ServiceContent } from '@/components/service-content'
import { Fuel } from 'lucide-react'

export default function GasServicesPage() {
  const content = {
    title: "Gas Services",
    description: "Professional gas services for your home and business",
    icon: Fuel,
    features: [
      "Professional gas installation",
      "Regular maintenance services",
      "Safety inspections and certifications",
      "Emergency repair services",
      "Expert technical support",
      "Quality equipment and parts"
    ],
    details: `Our comprehensive gas services ensure your gas systems are installed, maintained, 
    and operating safely. We provide professional installation, regular maintenance, and 
    24/7 emergency support for all your gas needs.`
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

