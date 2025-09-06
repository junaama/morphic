'use client'

import Link from 'next/link'

import { ProductResult } from '@/lib/types'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export interface ProductResultsProps {
  products: ProductResult[]
}

export function ProductResults({ products }: ProductResultsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <Link href={product.source_url} key={index} passHref target="_blank">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardContent className="p-4">
              {product.image_url && (
                <div className="mb-4">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
              {product.brand && (
                <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
              )}
              {product.price && (
                <Badge variant="secondary" className="mb-2">{product.price}</Badge>
              )}
              <div className="flex flex-wrap gap-2 text-sm">
                {product.color && <Badge variant="outline">{product.color}</Badge>}
                {product.size && <Badge variant="outline">{product.size}</Badge>}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
