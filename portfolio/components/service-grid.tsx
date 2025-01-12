import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: "Retail Gas Services",
    description: "We offer retail services such as LPG gas refills inclusive with technical assistance with gas appliance, fittings services and installations at no extra cost. We guarantee accurate cylinder refills, what you pay for is what you get. We also offer delivery services across Nigeria",
    image: "/placeholder.svg"
  },
  {
    title: "Trading Services",
    description: "We source products both locally and internationally, and trade this gas ex-depot to clients with bulk volume needs.",
    image: "/placeholder.svg"
  },
  {
    title: "Bulk LPG Supply",
    description: "We provide bulk LPG supply services to industrial and commercial customers, ensuring reliable and consistent delivery of high-quality gas products.",
    image: "/placeholder.svg"
  },
  {
    title: "Corporate Gas Services",
    description: "Tailored gas solutions for businesses, including installation, maintenance, and regular supply services with dedicated account management.",
    image: "/placeholder.svg"
  }
]

export function ServiceGrid() {
  return (
    <div className="grid gap-8">
      {services.map((service, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <Button 
              className="self-start mt-auto bg-orange-500 hover:bg-orange-600"
            >
              READ MORE
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

