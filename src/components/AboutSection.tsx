import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export function AboutSection({ onLearnMore }: AboutSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwYXN0ZWx8ZW58MXx8fHwxNzYyOTE3NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Korean beauty products collection"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-200/40 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <span className="text-sm tracking-wide text-rose-600 bg-rose-100 px-4 py-2 rounded-full inline-block">
              Our Story
            </span>
            
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Inspired by Korea's Beauty Culture, Made for Norway
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                At K-Glow Oslo, we believe everyone deserves access to the innovative, effective skincare 
                that Korean beauty has perfected over decades. We carefully curate only the best products 
                from trusted brands, bringing Seoul's most coveted beauty secrets directly to your door in Norway.
              </p>
              <p>
                Our mission is simple: to help you achieve healthy, glowing skin with products that truly work. 
                Every item in our collection is chosen for its quality, effectiveness, and the joy it brings to 
                your daily beauty routine.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div>
                <div className="text-3xl mb-2">🇰🇷</div>
                <p className="text-sm text-gray-600">Authentic Korean brands</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✨</div>
                <p className="text-sm text-gray-600">Clean ingredients</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚚</div>
                <p className="text-sm text-gray-600">Fast shipping</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💚</div>
                <p className="text-sm text-gray-600">Eco-conscious</p>
              </div>
            </div>

            <Button 
              onClick={onLearnMore}
              variant="outline"
              className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 rounded-full transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
