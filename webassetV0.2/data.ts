import { Product } from './types';

const PLACEHOLDER_IMG = "https://placehold.co/800x800?text=Product+Image";

export const products: Product[] = [
  // Makeup
  { 
    id: 1, 
    name: "Velvet Blur Lip Tint", 
    category: 'makeup', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Soft-focus matte finish that lasts all day.",
    badge: "Bestseller"
  },
  { 
    id: 2, 
    name: "Glass Skin Cushion", 
    category: 'makeup', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Dewy coverage for that signature Seoul glow." 
  },
  { 
    id: 3, 
    name: "Precision Volume Mascara", 
    category: 'makeup', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Waterproof, smudge-proof, and ultra-black lashes." 
  },
  { 
    id: 4, 
    name: "Petal Soft Blush", 
    category: 'makeup', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "A natural flush of color inspired by cherry blossoms." 
  },
  { 
    id: 5, 
    name: "Moonlight Highlighter", 
    category: 'makeup', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Iridescent glow that catches the light." 
  },
  { 
    id: 6, 
    name: "Silk Eye Palette", 
    category: 'makeup', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Earthy tones with a buttery texture." 
  },
  // Skincare
  { 
    id: 7, 
    name: "Snail Mucin Essence", 
    category: 'skincare', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Deep hydration and repair for damaged barriers.",
    badge: "Trending"
  },
  { 
    id: 8, 
    name: "Centella Calming Toner", 
    category: 'skincare', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Instantly soothes irritated and sensitive skin." 
  },
  { 
    id: 9, 
    name: "Glow Vitamin C Serum", 
    category: 'skincare', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Brightens dark spots and evens skin tone." 
  },
  { 
    id: 10, 
    name: "Deep Moisture Cream", 
    category: 'skincare', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Rich barrier-strengthening formula." 
  },
  { 
    id: 11, 
    name: "Rice Water Cleanser", 
    category: 'skincare', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Gentle brightening wash for daily use." 
  },
  { 
    id: 12, 
    name: "Overnight Sleep Mask", 
    category: 'skincare', 
    price: 10, 
    image: PLACEHOLDER_IMG, 
    description: "Wake up with plump, rejuvenated skin." 
  },
];