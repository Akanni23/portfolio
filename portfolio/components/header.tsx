import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://sjc.microlink.io/UDKCsFGr4sYbRqElzo9MVWevzXpiIzJzFvKW9f07fBAf2F1VYj8jY0mF_t8jwtl-KYUyscRuYSusa8Jcf8ZQNA.jpeg"
              alt="ONEGAS Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-500" />
              <div>
                <p>ONEGAS refilling plant, Tinapa road,</p>
                <p>Off 8 miles, Calabar</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-500" />
              <div>
                <p>Call Us Anytime</p>
                <p>+234 708 833 4008</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-500" />
              <div>
                <p>Send us a mail</p>
                <p>info@onegas.ng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="bg-[#1a1464] text-white">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-start gap-8 h-14">
            <li>
              <Link href="/services" className="hover:text-orange-500 transition-colors">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/order" className="hover:text-orange-500 transition-colors">
                ORDER A REFILL
              </Link>
            </li>
            <li>
              <Link href="/accessories" className="hover:text-orange-500 transition-colors">
                BUY ACCESSORIES
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

