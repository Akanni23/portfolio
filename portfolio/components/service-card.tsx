import Link from 'next/link'
import { TypeIcon as type, LucideIcon } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: string
}

export function ServiceCard({ title, description, icon: Icon, link }: ServiceCardProps) {
  return (
    <Card className="group">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-[#1a1464] text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={link} className="w-full">
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

