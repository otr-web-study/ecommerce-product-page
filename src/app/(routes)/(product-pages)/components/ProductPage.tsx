import { type FC } from 'react';
import { getProduct } from '@/lib/getProduct';
import { formatPrice } from '@/lib/format';
import { ProductControls } from './ProductControls/ProductControls';

export const ProductPage = () => {
  const product = getProduct();
  const { manufacturer, name, description, price, discount, discountedPrice } = product;

  return (
    <div className="flex w-full max-w-[445px] flex-col px-6 md:px-0">
      <h2 className="text-xs font-bold uppercase tracking-[1.68px] text-orange md:text-sm md:tracking-[1.12px]">
        {manufacturer}
      </h2>
      <h1 className="mt-3 text-[28px] font-bold leading-[32px] text-very-dark-blue md:text-[44px] md:leading-[48px]">
        {name}
      </h1>
      <p className="mt-4 text-[14px] leading-[25px] tracking-[0.56px] text-grayish-blue md:text-[16px] md:leading-[26px] md:tracking-normal">
        {description}
      </p>
      <div className="mb-7 mt-[30px] flex justify-between gap-[10px] md:mb-[34px] md:flex-col">
        <span className="flex text-[30px] font-bold leading-[26px] text-very-dark-blue">
          {formatPrice(discountedPrice)}{' '}
          <span className="ml-4 flex h-full items-center rounded-radii-5 bg-pale-orange px-[10px] text-[16px] font-bold">{`${discount}%`}</span>
        </span>
        <span className="font-bold tracking-[0.48px] text-very-dark-blue line-through">
          {formatPrice(price)}
        </span>
      </div>
      <ProductControls product={product} />
    </div>
  );
};
