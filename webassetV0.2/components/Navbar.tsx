import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X, Search, User, ArrowRight } from 'lucide-react';
import { View, Product } from '../types';
import { products } from '../data';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
  cartCount: number;
  onOpenCart: () => void;
  onAddToCart: (product: Product) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount, onOpenCart, onAddToCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  const navLinks: { label: string; value: View }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Makeup', value: 'makeup' },
    { label: 'Skincare', value: 'skincare' },
  ];

  // Search Logic
  const filteredProducts = searchQuery.length > 0 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Search Overlay Mode */}
        {isSearchOpen ? (
          <div className="flex items-center w-full h-8 animate-in fade-in zoom-in-95 duration-200">
            <Search className="text-gray-400 mr-4 flex-shrink-0" size={20} />
            <input 
              ref={searchInputRef}
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for mascara, lipstick, serum..." 
              className="flex-1 bg-transparent border-none outline-none text-lg placeholder-gray-300 text-black h-full"
            />
            <button 
              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
              className="ml-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
        ) : (
          /* Normal Navbar Mode */
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div 
              className="text-2xl font-serif font-bold tracking-tight cursor-pointer"
              onClick={() => setView('home')}
            >
              Store Name
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => setView(link.value)}
                  className={`text-sm tracking-widest font-medium uppercase transition-colors hover:text-black ${
                    currentView === link.value ? 'text-black border-b border-black' : 'text-gray-500'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button 
                className="hidden sm:block text-gray-800 hover:text-black transition-colors"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={20} />
              </button>
              <button className="hidden sm:block text-gray-800 hover:text-black transition-colors">
                <User size={20} />
              </button>
              <button 
                className="text-gray-800 hover:text-black transition-colors relative"
                onClick={onOpenCart}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Search Results Dropdown */}
        {isSearchOpen && searchQuery.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[60vh] overflow-y-auto animate-in slide-in-from-top-2">
            <div className="max-w-7xl mx-auto">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="flex items-center space-x-4 p-3 hover:bg-gray-50 transition-colors group cursor-pointer border border-transparent hover:border-gray-100 rounded-lg"
                      onClick={() => {
                        onAddToCart(product);
                        // Optional: Keep search open or close it? Let's keep it open so they can add more
                      }}
                    >
                      <div className="w-16 h-16 bg-gray-100 flex-shrink-0 overflow-hidden rounded-md">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{product.category}</p>
                        <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{product.price} kr</p>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-10 text-center">
                  <p className="text-gray-400">No products found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && !isSearchOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                setView(link.value);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left text-sm tracking-widest font-medium uppercase py-2 ${
                currentView === link.value ? 'text-black' : 'text-gray-500'
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Mobile Search Button in Menu */}
          <button 
            className="text-left text-sm tracking-widest font-medium uppercase py-2 text-gray-500 flex items-center"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
          >
            <Search size={16} className="mr-2" /> Search
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;