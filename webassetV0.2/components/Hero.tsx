import React from 'react';
import { View } from '../types';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative h-[80vh] w-full bg-pink-50 flex items-center justify-center overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://placehold.co/1920x1080?text=Hero+Image" 
          alt="Brand Model" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Light Metallic Pink Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-slate-100/60 to-rose-100/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-gray-900 px-4 max-w-4xl mx-auto">
        <span className="block text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-gray-600 font-medium">
          The Future of Beauty
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-gray-900 drop-shadow-sm">
          Hero text
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 text-gray-700 max-w-2xl mx-auto">
          Discover the secret to glass skin with our curated collection of premium Korean skincare and makeup essentials.
        </p>
        <button 
          onClick={onShopNow}
          className="bg-black text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 min-w-[200px] shadow-lg"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;