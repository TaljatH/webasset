import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 cursor-pointer">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        
        {/* Quick Add Button - Appears on Hover */}
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800"
        >
          <Plus size={14} />
          <span>Add to Cart</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow text-center group-hover:opacity-75 transition-opacity">
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">
          {product.category}
        </span>
        <h3 className="font-medium text-brand-black mb-2 text-lg font-serif">
          {product.name}
        </h3>
        <span className="font-bold text-sm">
          {product.price} kr
        </span>
      </div>
      
      {/* Mobile Add Button (Always visible on touch) */}
      <div className="md:hidden mt-4">
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full border border-black py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;