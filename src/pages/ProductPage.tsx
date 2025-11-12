import { useState } from 'react';
import { ShoppingCart, ArrowLeft, Heart, Share2, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import type { Product } from '../App';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProductPageProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

export function ProductPage({ product, onAddToCart, onBack }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button
          onClick={onBack}
          variant="ghost"
          className="hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Button>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-rose-100 text-rose-700 border-0">
                {product.brand}
              </Badge>
              <h1 className="text-3xl md:text-4xl tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-3xl mb-4">{product.price} kr</p>
              <p className="text-gray-600">
                {product.description}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span>100% Authentic Korean Product</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span>Free shipping on orders over 500 kr</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span>30-day return policy</span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm">Quantity:</label>
                <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-200">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-full transition-all duration-300 hover:scale-105"
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white w-12 h-12"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white w-12 h-12"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="ingredients" className="w-full">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="howto">How to Use</TabsTrigger>
              </TabsList>
              <TabsContent value="ingredients" className="mt-4 space-y-2">
                <h3 className="mb-2">Key Ingredients</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.ingredients}
                </p>
              </TabsContent>
              <TabsContent value="howto" className="mt-4 space-y-2">
                <h3 className="mb-2">How to Use</h3>
                <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                  <li>Cleanse your face with a gentle cleanser</li>
                  <li>Apply the product evenly to your skin</li>
                  <li>Gently pat until fully absorbed</li>
                  <li>Follow with your regular skincare routine</li>
                </ol>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
