'use client';
import { type FC } from 'react';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { type Product } from '@/types/product';
import { CartIcon } from '@/app/components/icons/CartIcon';
import { MinusIcon } from '@/app/components/icons/MinusIcon';
import { PlusIcon } from '@/app/components/icons/PlusIcon';
import { useProductControls } from './useProductControls';

interface ProductControlsProps {
  product: Product;
}
export const ProductControls: FC<ProductControlsProps> = ({ product }) => {
  const { count, increaseCount, decreaseCount, addToCart } = useProductControls();

  return (
    <div className="grid gap-x-[15px] gap-y-[17px] md:grid-cols-[35.5%_61%]">
      <div className="flex h-[54px] items-center justify-between rounded-radii bg-light-grayish-blue px-6 md:px-4">
        <motion.button
          className="grid h-5 w-5 place-items-center"
          transition={{
            type: 'spring',
            stiffness: 300,
          }}
          whileHover={{
            scale: [null, 1.2, 1.15],
            transition: { duration: 0.3, delay: 0, type: 'spring', stiffness: 250 },
          }}
          onClick={decreaseCount}
        >
          <MinusIcon />
          <span className="sr-only">decrease</span>
        </motion.button>
        <span className="font-bold tracking-[1.28px]">{count}</span>
        <motion.button
          className="grid h-5 w-5 place-items-center"
          transition={{
            type: 'spring',
            stiffness: 300,
          }}
          whileHover={{
            scale: [null, 1.2, 1.15],
            transition: { duration: 0.3, delay: 0, type: 'spring', stiffness: 250 },
          }}
          onClick={increaseCount}
        >
          <PlusIcon />
          <span className="sr-only">increase</span>
        </motion.button>
      </div>
      <Button
        className="h-[54px] bg-orange font-bold text-white"
        onClick={() => addToCart(product)}
      >
        <CartIcon />
        Add to cart
      </Button>
    </div>
  );
};
