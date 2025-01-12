import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1a1464] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://sjc.microlink.io/UDKCsFGr4sYbRqElzo9MVWevzXpiIzJzFvKW9f07fBAf2F1VYj8jY0mF_t8jwtl-KYUyscRuYSusa8Jcf8ZQNA.jpeg"
              alt="ONEGAS Logo"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              ONEGAS Limited is committed to providing safe and reliable gas services to our customers.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-orange-500 transition-colors">
                  Order a Refill
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="hover:text-orange-500 transition-colors">
                  Buy Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <p className="text-sm">ONEGAS refilling plant, Tinapa road, Off 8 miles, Calabar</p>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <p className="text-sm">+234 708 833 4008</p>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <p className="text-sm">info@onegas.ng</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ONEGAS Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

