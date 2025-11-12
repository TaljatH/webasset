import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Collections() {
  const collections = [
    {
      id: 1,
      title: '[Collection Title 1]',
      description: '[Add collection description here]',
      image: 'https://images.unsplash.com/photo-1620917669809-1af0497965de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwbWluaW1hbHxlbnwxfHx8fDE3NjI4NTcwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: '[Collection Title 2]',
      description: '[Add collection description here]',
      image: 'https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwYXN0ZWx8ZW58MXx8fHwxNzYyOTE3NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: '[Collection Title 3]',
      description: '[Add collection description here]',
      image: 'https://images.unsplash.com/photo-1593260853607-d0e0f639bdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBtYWtldXAlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjI5MTc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: '[Collection Title 4]',
      description: '[Add collection description here]',
      image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzZXJ1bSUyMGJvdHRsZXxlbnwxfHx8fDE3NjI4NTA4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: '[Collection Title 5]',
      description: '[Add collection description here]',
      image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBmbGF0bGF5JTIwcGlua3xlbnwxfHx8fDE3NjI5MTc1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: '[Collection Title 6]',
      description: '[Add collection description here]',
      image: 'https://images.unsplash.com/photo-1593638112487-4ddea6affcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBza2luY2FyZSUyMGJlYXV0eXxlbnwxfHx8fDE3NjI4NTQ5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Our Collections
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            [Add collections page description here]
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card 
              key={collection.id}
              className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-gray-50/50"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <ImageWithFallback
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl group-hover:text-rose-600 transition-colors">
                  {collection.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {collection.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-full transition-all duration-300"
                >
                  Explore Collection
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
