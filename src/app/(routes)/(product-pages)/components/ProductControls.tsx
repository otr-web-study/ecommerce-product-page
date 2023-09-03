'use client';
import { type FC } from 'react';
import { Button } from '@nextui-org/react';
import { type Product } from '@/types/product';
import { CartIcon } from '@/app/components/icons/CartIcon';
import { MinusIcon } from '@/app/components/icons/MinusIcon';
import { PlusIcon } from '@/app/components/icons/PlusIcon';

interface ProductControlsProps {
  product: Product;
}
export const ProductControls: FC<ProductControlsProps> = ({ product }) => {
  return (
    <div className="grid gap-x-[15px] gap-y-[17px] md:grid-cols-[35.5%_61%]">
      <div className="flex h-[54px] items-center justify-between rounded-radii bg-light-grayish-blue px-6 md:px-4">
        <button className="grid h-5 w-5 place-items-center">
          <MinusIcon />
          <span className="sr-only">decrease</span>
        </button>
        <span className="font-bold tracking-[1.28px]">0</span>
        <button className="grid h-5 w-5 place-items-center">
          <PlusIcon />
          <span className="sr-only">increase</span>
        </button>
      </div>
      <Button className="h-[54px] bg-orange font-bold text-white">
        <CartIcon />
        Add to cart
      </Button>
    </div>
  );
};
