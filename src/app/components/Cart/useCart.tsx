'use client';
import { useContext } from 'react';
import { CartContext } from '@/app/context/cart-context';

export const useCart = (onCartClose: () => void) => {
  const cartContext = useContext(CartContext);

  const checkout = () => {
    cartContext?.clearCart();
    onCartClose();
  };

  const deleteItem = (productName: string) => {
    cartContext?.deleteItem(productName);
  };

  return {
    cart: cartContext?.cart ?? [],
    deleteItem,
    checkout,
  };
};
