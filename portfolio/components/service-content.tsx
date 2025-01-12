import { Check } from 'lucide-react'

interface ServiceContentProps {
  features: string[]
  details: string
}

export function ServiceContent({ features, details }: ServiceContentProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Features & Benefits</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="h-5 w-5 text-orange-500" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Service Details</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">{details}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

