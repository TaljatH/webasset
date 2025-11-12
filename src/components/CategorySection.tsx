import { Droplets, Sparkles, Flower2, Heart, Scissors } from 'lucide-react';

interface CategorySectionProps {
  onCategoryClick: (category: string) => void;
}

export function CategorySection({ onCategoryClick }: CategorySectionProps) {
  const categories = [
    {
      name: 'Skincare',
      icon: Droplets,
      description: 'Hydrating & nourishing',
      color: 'from-blue-100 to-cyan-100',
      hoverColor: 'hover:from-blue-200 hover:to-cyan-200',
    },
    {
      name: 'Makeup',
      icon: Sparkles,
      description: 'Flawless & radiant',
      color: 'from-pink-100 to-rose-100',
      hoverColor: 'hover:from-pink-200 hover:to-rose-200',
    },
    {
      name: 'Hair',
      icon: Scissors,
      description: 'Silky & strong',
      color: 'from-purple-100 to-violet-100',
      hoverColor: 'hover:from-purple-200 hover:to-violet-200',
    },
    {
      name: 'Body',
      icon: Flower2,
      description: 'Smooth & soft',
      color: 'from-green-100 to-emerald-100',
      hoverColor: 'hover:from-green-200 hover:to-emerald-200',
    },
    {
      name: 'Accessories',
      icon: Heart,
      description: 'Tools & essentials',
      color: 'from-amber-100 to-orange-100',
      hoverColor: 'hover:from-amber-200 hover:to-orange-200',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect products for your beauty routine
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => onCategoryClick(category.name)}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.color} ${category.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
