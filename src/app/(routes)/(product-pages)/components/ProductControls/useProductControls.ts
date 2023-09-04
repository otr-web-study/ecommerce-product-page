import { useContext, useState } from 'react';
import { CartContext } from '@/app/context/cart-context';
import { Product } from '@/types/product';

export const useProductControls = () => {
  const [count, setCount] = useState(1);
  const cartContext = useContext(CartContext);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count) {
      setCount(count - 1);
    }
  };

  const addToCart = (product: Product) => {
    if (count) {
      cartContext?.addItem(product, count);
    }
  };

  return { count, increaseCount, decreaseCount, addToCart };
};
