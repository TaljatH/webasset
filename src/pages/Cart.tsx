import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import type { CartItem } from '../App';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  onContinueShopping: () => void;
}

export function Cart({ items, onUpdateQuantity, onRemove, onContinueShopping }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 59;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {items.length === 0 ? 'Your cart is empty' : `${items.length} item${items.length !== 1 ? 's' : ''} in your cart`}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl tracking-tight mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Start shopping and add your favorite K-beauty products to your cart
            </p>
            <Button
              onClick={onContinueShopping}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-6 border-0 bg-gray-50/50">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-white shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4 mb-2">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                          <h3 className="truncate">{item.name}</h3>
                        </div>
                        <Button
                          onClick={() => onRemove(item.id)}
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-red-600 shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-x border-gray-200 text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-lg">
                          {item.price * item.quantity} kr
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-0 bg-gray-50/50 sticky top-24">
                <h2 className="text-2xl tracking-tight mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{subtotal} kr</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `${shipping} kr`}</span>
                  </div>
                  {subtotal < 500 && subtotal > 0 && (
                    <p className="text-xs text-gray-500 bg-blue-50 p-3 rounded-lg">
                      Add {500 - subtotal} kr more for free shipping!
                    </p>
                  )}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span className="text-xl">{total} kr</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-full transition-all duration-300 hover:scale-105 mb-3">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  onClick={onContinueShopping}
                  variant="outline"
                  className="w-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white py-6 rounded-full transition-all duration-300"
                >
                  Continue Shopping
                </Button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span>30-day return policy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span>Customer support</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
