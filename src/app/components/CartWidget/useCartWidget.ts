'use client';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

export const useCartWidget = () => {
  const cartContext = useContext(CartContext);

  return {
    cart: cartContext?.cart ?? [],
    totalCount: cartContext?.totalCount ?? 0,
    deleteItem: cartContext?.deleteItem,
    checkout: cartContext?.clearCart,
  };
};
