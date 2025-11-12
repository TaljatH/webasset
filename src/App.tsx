import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CategorySection } from './components/CategorySection';
import { AboutSection } from './components/AboutSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Shop } from './pages/Shop';
import { ProductPage } from './pages/ProductPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  description: string;
  ingredients: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Hydrating Essence Toner',
      brand: 'COSRX',
      price: 259,
      image: 'https://images.unsplash.com/photo-1620917669809-1af0497965de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwbWluaW1hbHxlbnwxfHx8fDE3NjI4NTcwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Skincare',
      description: 'A deeply hydrating essence toner that provides moisture and prepares skin for the next steps in your routine.',
      ingredients: 'Hyaluronic Acid, Snail Mucin, Centella Asiatica',
      featured: true,
    },
    {
      id: 2,
      name: 'Cushion Foundation SPF50',
      brand: 'Laneige',
      price: 389,
      image: 'https://images.unsplash.com/photo-1593260853607-d0e0f639bdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBtYWtldXAlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjI5MTc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Makeup',
      description: 'Lightweight cushion foundation with SPF50 for flawless, dewy coverage that lasts all day.',
      ingredients: 'Titanium Dioxide, Hyaluronic Acid, Green Tea Extract',
      featured: true,
    },
    {
      id: 3,
      name: 'Vitamin C Brightening Serum',
      brand: 'Klairs',
      price: 299,
      image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzZXJ1bSUyMGJvdHRsZXxlbnwxfHx8fDE3NjI4NTA4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Skincare',
      description: 'Pure Vitamin C serum to brighten, fade dark spots, and even out skin tone for radiant skin.',
      ingredients: 'Ascorbic Acid, Niacinamide, Hyaluronic Acid',
      featured: true,
    },
    {
      id: 4,
      name: 'Matte Lip Tint',
      brand: 'Peripera',
      price: 149,
      image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBmbGF0bGF5JTIwcGlua3xlbnwxfHx8fDE3NjI5MTc1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Makeup',
      description: 'Long-lasting matte lip tint that delivers vibrant color without drying your lips.',
      ingredients: 'Rose Extract, Vitamin E, Natural Pigments',
      featured: true,
    },
    {
      id: 5,
      name: 'Centella Calming Cream',
      brand: 'Dr. Jart+',
      price: 349,
      image: 'https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwYXN0ZWx8ZW58MXx8fHwxNzYyOTE3NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Skincare',
      description: 'Soothing cream with Centella Asiatica to calm irritation and strengthen skin barrier.',
      ingredients: 'Centella Asiatica, Madecassoside, Ceramides',
      featured: true,
    },
    {
      id: 6,
      name: 'Glass Skin Essence',
      brand: 'Missha',
      price: 279,
      image: 'https://images.unsplash.com/photo-1593638112487-4ddea6affcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBza2luY2FyZSUyMGJlYXV0eXxlbnwxfHx8fDE3NjI4NTQ5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Skincare',
      description: 'Achieve the coveted glass skin look with this deeply hydrating, luminous essence.',
      ingredients: 'Fermented Yeast, Niacinamide, Pearl Extract',
      featured: true,
    },
    {
      id: 7,
      name: 'Sun Protection Gel SPF50+',
      brand: 'Beauty of Joseon',
      price: 199,
      image: 'https://images.unsplash.com/photo-1620917669809-1af0497965de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwbWluaW1hbHxlbnwxfHx8fDE3NjI4NTcwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Skincare',
      description: 'Lightweight, non-greasy sunscreen that protects while hydrating your skin.',
      ingredients: 'Chemical UV Filters, Rice Extract, Probiotics',
    },
    {
      id: 8,
      name: 'Eyebrow Tint Pen',
      brand: 'Etude House',
      price: 129,
      image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBmbGF0bGF5JTIwcGlua3xlbnwxfHx8fDE3NjI5MTc1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Makeup',
      description: 'Precise eyebrow pen for natural-looking, hair-like strokes that last all day.',
      ingredients: 'Natural Pigments, Plant Extracts, Vitamin E',
    },
  ];

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item))
      );
    }
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const navigateToShop = (category?: string) => {
    setSelectedCategory(category || null);
    setCurrentPage('shop');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onNavigate={(page) => {
          if (page === 'skincare') {
            navigateToShop('Skincare');
          } else if (page === 'makeup') {
            navigateToShop('Makeup');
          } else if (page === 'collections') {
            setCurrentPage('shop');
          } else {
            setCurrentPage(page);
          }
        }}
        onCartClick={() => setCurrentPage('cart')}
      />

      {currentPage === 'home' && (
        <>
          <Hero onShopClick={() => navigateToShop()} />
          <FeaturedProducts
            products={products.filter((p) => p.featured)}
            onProductClick={navigateToProduct}
            onAddToCart={addToCart}
          />
          <CategorySection onCategoryClick={navigateToShop} />
          <AboutSection onLearnMore={() => setCurrentPage('about')} />
          <Newsletter />
        </>
      )}

      {currentPage === 'shop' && (
        <Shop
          products={products}
          onProductClick={navigateToProduct}
          onAddToCart={addToCart}
          initialCategory={selectedCategory}
        />
      )}

      {currentPage === 'product' && selectedProduct && (
        <ProductPage product={selectedProduct} onAddToCart={addToCart} onBack={() => setCurrentPage('shop')} />
      )}

      {currentPage === 'about' && <About />}

      {currentPage === 'contact' && <Contact />}

      {currentPage === 'cart' && (
        <Cart
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onContinueShopping={() => navigateToShop()}
        />
      )}

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}