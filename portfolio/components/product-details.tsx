'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const sizes = [
  { value: '3kg', label: '3KG Cylinder', price: 920 },
  { value: '5kg', label: '5KG Cylinder', price: 2500 },
  { value: '12.5kg', label: '12.5KG Cylinder', price: 8500 },
  { value: '50kg', label: '50KG Cylinder', price: 47500 },
]

export function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  const selectedPrice = sizes.find(size => size.value === selectedSize)?.price || 920

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative group">
        <Image
          src="/placeholder.svg"
          alt="Gas Cylinder"
          width={500}
          height={500}
          className="w-full rounded-lg"
        />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Search className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Gas Refill</h2>
          <p className="text-xl">₦{selectedPrice.toLocaleString()}</p>
          <p className="text-gray-600 mt-2">Refill</p>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">SIZE</label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label} - ₦{size.price.toLocaleString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Quantity</label>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="pt-4">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg">
            Add to cart - ₦{(selectedPrice * quantity).toLocaleString()}
          </Button>
        </div>
      </div>
    </div>
  )
}

