import { createContext } from 'react';
import { type CartItem } from '@/types/cart';
import { type Product } from '@/types/product';

interface CartContextProps {
  cart: CartItem[];
  totalCount: number;
  addItem: (product: Product, count: number) => void;
  deleteItem: (productName: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | null>(null);
