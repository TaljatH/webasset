import { useState, useEffect } from 'react';
import { ShoppingCart, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import type { Product } from '../App';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ShopProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  initialCategory?: string | null;
}

export function Shop({ products, onProductClick, onAddToCart, initialCategory }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = ['All', 'Skincare', 'Makeup', 'Hair', 'Body', 'Accessories'];
  const brands = ['All', ...Array.from(new Set(products.map((p) => p.brand)))];

  let filteredProducts = products;

  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory);
  }

  if (selectedBrand !== 'All') {
    filteredProducts = filteredProducts.filter((p) => p.brand === selectedBrand);
  }

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-cream-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Shop All Products
          </h1>
          <p className="text-gray-600">
            Discover our complete collection of authentic Korean beauty products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            <span>Filters</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Brand</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                    size="sm"
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your filters.</p>
            <Button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedBrand('All');
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
