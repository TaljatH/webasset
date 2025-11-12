import { Heart, Sparkles, Truck, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm tracking-wide text-rose-600 bg-rose-100 px-4 py-2 rounded-full inline-block mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Bringing K-Beauty to Norway
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A passion project born from love for Korean skincare and a mission to make 
            these incredible products accessible to everyone in Norway.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
              Inspired by Korea's Beauty Culture
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                K-Glow Oslo was founded in 2023 by a team of beauty enthusiasts who fell in love 
                with Korean skincare during their travels to Seoul. We were amazed by the innovation, 
                quality, and effectiveness of K-beauty products, and we knew we had to share this 
                discovery with Norway.
              </p>
              <p>
                What makes Korean beauty special is its focus on prevention, nourishment, and celebrating 
                your natural beauty. It's not about covering up—it's about revealing your healthiest, 
                most radiant skin.
              </p>
              <p>
                Today, we carefully curate products from Korea's most trusted brands, ensuring every 
                item meets our high standards for quality, ingredients, and effectiveness. We're proud 
                to be Norway's go-to destination for authentic K-beauty.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593638112487-4ddea6affcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBza2luY2FyZSUyMGJlYXV0eXxlbnwxfHx8fDE3NjI4NTQ5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Korean beauty products"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl">100% Authentic</h3>
            <p className="text-sm text-gray-600">
              Every product is sourced directly from authorized Korean distributors
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl">Quality First</h3>
            <p className="text-sm text-gray-600">
              We test and curate only the best products that deliver real results
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Truck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl">Fast Shipping</h3>
            <p className="text-sm text-gray-600">
              Orders ship within 24 hours with tracking to anywhere in Norway
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl">Customer Love</h3>
            <p className="text-sm text-gray-600">
              Dedicated support team ready to help with product recommendations
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To help everyone in Norway discover the transformative power of Korean beauty. 
            We believe that great skincare is self-care, and everyone deserves to feel confident 
            and beautiful in their own skin. Through education, quality products, and genuine care 
            for our customers, we're building a community that celebrates natural beauty and healthy skin.
          </p>
        </div>
      </div>
    </div>
  );
}
