import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CategorySection } from './components/CategorySection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Shop } from './pages/Shop';
import { ProductPage } from './pages/ProductPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Collections } from './pages/Collections';

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
      price: 0,
      image: 'https://images.unsplash.com/photo-1620917669809-1af0497965de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwbWluaW1hbHxlbnwxfHx8fDE3NjI4NTcwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Skincare',
      description: 'A deeply hydrating essence toner that provides moisture and prepares skin for the next steps in your routine.',
      ingredients: 'Hyaluronic Acid, Snail Mucin, Centella Asiatica',
      featured: true,
    },

    {
      id: 2,
      name: 'Eyebrow?',
      brand: 'KoreanBrand',
      price: 0,
      image: 'https://img.freepik.com/premium-vector/red-grunge-rubber-stamp-with-word-replace-it_545399-3668.jpg',
      category: 'Makeup',
      description: 'Explain small about the product.',
      ingredients: 'ingredients',
      featured: true,
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
            setCurrentPage('collections');
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

      {currentPage === 'collections' && <Collections />}

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}