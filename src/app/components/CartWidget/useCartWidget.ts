'use client';
import { useContext, useState } from 'react';
import { CartContext } from '@/app/context/cart-context';

export const useCartWidget = () => {
  const cartContext = useContext(CartContext);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toggleWidgetOpen = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return {
    totalCount: cartContext?.totalCount ?? 0,
    isWidgetOpen,
    toggleWidgetOpen,
  };
};
