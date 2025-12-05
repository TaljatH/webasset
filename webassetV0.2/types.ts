export type Category = 'makeup' | 'skincare';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type View = 'home' | 'makeup' | 'skincare';