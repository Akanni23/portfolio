import { type LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface FeatureCardProps {
  title: string
  description: string
  image: string
  icon: LucideIcon
  iconBgColor: 'orange' | 'navy'
}

export function FeatureCard({ title, description, image, icon: Icon, iconBgColor }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full h-64 mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
        <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 p-4 rounded-full 
          ${iconBgColor === 'orange' ? 'bg-orange-500' : 'bg-[#1a1464]'}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

