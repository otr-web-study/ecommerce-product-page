'use client';
import { useState } from 'react';
import { CartContext } from '@/app/context/cart-context';
import { type CartItem } from '@/types/cart';
import { type Product } from '@/types/product';

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([
    {
      name: 'test',
      discountedPrice: 300,
      count: 1,
      sum: 300,
      images: ['/assets/images/image-product-1.jpg'],
    },
  ]);
  const [totalCount, setTotalCount] = useState(1);

  const getTotalCount = (curCart: CartItem[]) => curCart.reduce((acc, item) => acc + item.count, 0);

  const addItem = (product: Product, count: number) => {
    if (cart.findIndex((p) => p.name === product.name) < 0) {
      setCart([
        ...cart,
        {
          name: product.name,
          discountedPrice: product.discountedPrice,
          images: product.images,
          count: count,
          sum: count * product.discountedPrice,
        },
      ]);
    } else {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? {
                ...item,
                count: item.count + count,
                sum: item.discountedPrice * (item.count + count),
              }
            : item,
        ),
      );
    }
    setTotalCount(getTotalCount(cart));
  };

  const deleteItem = (productName: string) => {
    const newCart = cart.filter((item) => item.name !== productName);
    setCart(newCart);
    setTotalCount(getTotalCount(newCart));
  };

  const clearCart = () => {
    setCart([]);
    setTotalCount(0);
  };

  return (
    <CartContext.Provider value={{ cart, totalCount, addItem, deleteItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
