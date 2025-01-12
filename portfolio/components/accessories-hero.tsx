import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function AccessoriesHero() {
  return (
    <section className="relative h-[300px] flex items-center bg-[#1a1464]">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${encodeURI('https://sjc.microlink.io/sHADitsCjD-2SIt--GzIxu2R4UMzmaHTIZSf0By4G4LIkkUqbuD7YbROgaNcPoU9_uuQ8p5nR-wifM6Dtd5bcg.jpeg')})`,
          }}
        >
          <div className="absolute inset-0 bg-[#1a1464]/70" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Order your accessories
        </h1>
        <div className="flex items-center gap-2 text-white/80">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Order your accessories</span>
        </div>
      </div>
    </section>
  )
}

