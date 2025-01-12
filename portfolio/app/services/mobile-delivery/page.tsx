import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceDetailHero } from '@/components/service-detail-hero'
import { ServiceContent } from '@/components/service-content'
import { Truck } from 'lucide-react'

export default function MobileDeliveryPage() {
  const content = {
    title: "Mobile Delivery",
    description: "Convenient door-to-door gas delivery",
    icon: Truck,
    features: [
      "Door-to-door delivery",
      "Scheduled deliveries",
      "Real-time tracking",
      "Flexible delivery times",
      "Professional handling",
      "Safe transportation"
    ],
    details: `Our mobile delivery service brings gas right to your doorstep. With our 
    professional delivery team and modern delivery fleet, we ensure safe and timely 
    delivery of your gas cylinders.`
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

