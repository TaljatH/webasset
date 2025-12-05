import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-lg font-serif font-bold mb-6">Store Name</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Curating the finest Korean beauty innovations for a global audience. Experience the ritual of radiance.
          </p>
        </div>
        
        <div>
          <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h5>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">New Arrivals</li>
            <li className="hover:text-white cursor-pointer transition-colors">Bestsellers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Skincare Sets</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Help</h5>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">add helper_1</li>
            <li className="hover:text-white cursor-pointer transition-colors">add helper_2</li>
            <li className="hover:text-white cursor-pointer transition-colors">add helper_3</li>
            <li className="hover:text-white cursor-pointer transition-colors">add helper_4</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center md:text-left">
        <p className="text-xs text-gray-500">*Copy Right here*</p>
      </div>
    </footer>
  );
};

export default Footer;