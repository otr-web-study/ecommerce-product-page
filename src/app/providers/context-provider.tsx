'use client';
import { useState, useEffect } from 'react';
import { CartContext } from '@/app/context/cart-context';
import { type CartItem } from '@/types/cart';
import { type Product } from '@/types/product';

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const addItem = (product: Product, count: number) => {
    setCart(
      cart.findIndex((p) => p.name === product.name) < 0
        ? [
            ...cart,
            {
              name: product.name,
              discountedPrice: product.discountedPrice,
              images: product.images,
              count: count,
              sum: count * product.discountedPrice,
            },
          ]
        : cart.map((item) =>
            item.name === product.name
              ? {
                  ...item,
                  count: item.count + count,
                  sum: item.discountedPrice * (item.count + count),
                }
              : item,
          ),
    );
  };

  const deleteItem = (productName: string) => {
    setCart(cart.filter((item) => item.name !== productName));
  };

  const clearCart = () => {
    setCart([]);
    setTotalCount(0);
  };

  useEffect(() => {
    setTotalCount(cart.reduce((acc, item) => acc + item.count, 0));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, totalCount, addItem, deleteItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
