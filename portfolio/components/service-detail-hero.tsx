import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface ServiceDetailHeroProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceDetailHero({ title, description, icon: Icon }: ServiceDetailHeroProps) {
  return (
    <section className="relative h-[300px] flex items-center bg-[#1a1464]">
      <div className="absolute inset-0 bg-[#1a1464]/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-white/10 text-white">
            <Icon className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h1>
        </div>
        <p className="text-xl text-white/80 mb-4 max-w-2xl">
          {description}
        </p>
        <div className="flex items-center gap-2 text-white/60">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  )
}

