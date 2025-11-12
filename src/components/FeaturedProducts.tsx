import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import type { Product } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedProductsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function FeaturedProducts({ products, onProductClick, onAddToCart }: FeaturedProductsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm tracking-wide text-rose-600 bg-rose-100 px-4 py-4 rounded-full inline-block mb-4">
            Featured Products
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-gray-50/50"
            >
              <div 
                className="relative aspect-square overflow-hidden cursor-pointer bg-white"
                onClick={() => onProductClick(product)}
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-white text-gray-900 border-0 shadow-md">
                  {product.brand}
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <div 
                  className="cursor-pointer"
                  onClick={() => onProductClick(product)}
                >
                  <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="text-lg group-hover:text-rose-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl">{product.price} kr</span>
                  
                  <Button
                    onClick={() => onAddToCart(product)}
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
