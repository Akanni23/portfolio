import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Safe and Reliable Gas Services
          </h1>
          <p className="text-xl mb-8">
            We provide prompt and efficient gas services with the highest safety standards
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

