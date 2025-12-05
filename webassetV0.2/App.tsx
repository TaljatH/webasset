import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { products } from './data';
import { View, CartItem, Product } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isAnimatingCart, setIsAnimatingCart] = useState(false);

  // Cart Logic
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Trigger cart open or animation
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Helper to scroll top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onAddToCart={addToCart}
      />

      <main className="flex-grow pt-[80px]">
        {currentView === 'home' && (
          <>
            <Hero onShopNow={() => setCurrentView('makeup')} />
            
            <section className="py-20 px-6 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase block mb-3">Trending Now</span>
                <h2 className="text-3xl md:text-4xl font-serif font-medium">Curated Favorites</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.filter(p => [1, 7, 2].includes(p.id)).map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart} 
                  />
                ))}
              </div>
            </section>

             <section className="bg-brand-pink py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                   <div className="flex-1">
                      <img src="https://placehold.co/800x600?text=Ingredients+Image" alt="Ingredients" className="w-full h-auto object-cover" />
                   </div>
                   <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl font-serif font-bold mb-6">Clean Ingredients, Pure Radiance</h2>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        We believe that what you put on your skin matters. Our formulas are crafted with ethically sourced, high-efficacy ingredients inspired by traditional Korean herbal medicine and modern dermatological science.
                      </p>
                      <button 
                        onClick={() => setCurrentView('skincare')}
                        className="border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-gray-600 hover:border-gray-600 transition-colors"
                      >
                        Explore Skincare
                      </button>
                   </div>
                </div>
             </section>
          </>
        )}

        {(currentView === 'makeup' || currentView === 'skincare') && (
          <div className="py-12 px-6 max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-serif font-medium capitalize mb-4">{currentView}</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                {currentView === 'makeup' 
                  ? "Elevate your artistry with high-pigment formulas and skin-loving textures." 
                  : "Restore balance and glow with our advanced hydration technologies."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {products
                .filter(p => p.category === currentView)
                .map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart} 
                  />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default App;