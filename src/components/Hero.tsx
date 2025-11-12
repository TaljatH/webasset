import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onShopClick: () => void;
}

export function Hero({ onShopClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="text-sm tracking-wide text-rose-600 bg-rose-100 px-4 py-2 rounded-full">
                Premium K-Beauty
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Discover Korea's Beauty Secrets in Norway
            </h1>
            
            <p className="text-gray-600 max-w-lg">
              Bring out your natural glow with the most-loved K-beauty products — straight from Seoul to your doorstep. 
              Clean formulas, radiant results, and beauty that feels uniquely you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onShopClick}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <span>100% Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <span>Free Returns</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593638112487-4ddea6affcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBza2luY2FyZSUyMGJlYXV0eXxlbnwxfHx8fDE3NjI4NTQ5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Korean beauty products"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-pink-200/40 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-rose-200/40 rounded-full blur-3xl" />
    </section>
  );
}
