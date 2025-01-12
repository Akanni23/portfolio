import Link from 'next/link'
import { ChevronRight, FileText, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  { name: 'ALL SERVICES', href: '/services' },
  { name: 'Retail Gas Services', href: '/services/gas-services' },
  { name: 'Bulk LPG Supply', href: '/services/lpg-supply' },
  { name: 'Corporate Gas Services', href: '/services/gas-services' },
  { name: 'Trading Services', href: '/services/trading' },
]

export function ServicesSidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-50 rounded-lg p-6">
        <nav>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="flex items-center justify-between py-2 text-gray-600 hover:text-[#1a1464]"
                >
                  {service.name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Download Our Brochure</h3>
        <Button className="w-full flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
          <FileText className="h-4 w-4" />
          DOWNLOAD FILE
        </Button>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Our office</h3>
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
            <p>8 Providence street, Lekki Phase 1, Lagos, Nigeria</p>
          </div>
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-orange-500 shrink-0" />
            <p>Phone: +234 708 933 4008</p>
          </div>
          <div className="flex gap-3">
            <Mail className="h-5 w-5 text-orange-500 shrink-0" />
            <p>Mail: info@onegas.ng</p>
          </div>
        </div>
      </div>
    </div>
  )
}

