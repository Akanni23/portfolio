import { Card, CardContent } from "@/components/ui/card"
import { FuelIcon as GasPump, Truck, PenToolIcon as Tool, ShieldCheck } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: GasPump,
      title: "Gas Refilling",
      description: "Professional gas refilling services with accurate measurements"
    },
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Fast and reliable gas delivery to your doorstep"
    },
    {
      icon: Tool,
      title: "Maintenance",
      description: "Expert maintenance and repair services for gas equipment"
    },
    {
      icon: ShieldCheck,
      title: "Safety Inspection",
      description: "Thorough safety inspections and certifications"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of gas services to meet all your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex p-3 rounded-full bg-[#1a1464] text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

