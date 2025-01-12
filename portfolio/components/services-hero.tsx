import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function ServicesHero() {
  return (
    <section className="relative h-[300px] flex items-center bg-[#1a1464]">
      <div className="absolute inset-0 bg-[#1a1464]/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h1>
        <div className="flex items-center gap-2 text-white/60">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Services</span>
        </div>
      </div>
    </section>
  )
}

