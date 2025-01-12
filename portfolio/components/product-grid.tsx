'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const products = [
  {
    id: 1,
    name: '12.5kg Gas Cylinder (Iron)',
    price: 30000,
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Burner',
    price: 1700,
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Burner (Black)',
    price: 3000,
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Gas Hose',
    price: 2500,
    image: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'Regulator',
    price: 3500,
    image: '/placeholder.svg'
  },
  {
    id: 6,
    name: 'Gas Lighter',
    price: 500,
    image: '/placeholder.svg'
  }
]

export function ProductGrid() {
  const [cart, setCart] = useState<{[key: number]: number}>({})

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group">
          <CardContent className="p-4">
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-lg font-bold text-orange-500">
              ₦{product.price.toLocaleString()}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button 
              className="w-full bg-[#1a1464] hover:bg-[#1a1464]/90"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart {cart[product.id] ? `(${cart[product.id]})` : ''}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

