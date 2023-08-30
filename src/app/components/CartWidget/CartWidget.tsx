'use client';
import { motion } from 'framer-motion';
import { Image } from '@nextui-org/react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import { useCartWidget } from './useCartWidget';
import { formatPrice } from '@/lib/format';
import { DeleteIcon } from '../icons/DeleteIcon';

export const CartWidget = () => {
  const { cart, totalCount, deleteItem, checkout } = useCartWidget();

  const cartContent = cart.map((item) => (
    <div key={item.name} className="flex gap-4">
      <Image
        src={item.images[0]}
        alt={item.name}
        width={50}
        height={50}
        className="rounded-radii-4"
      />
      <div className="flex flex-grow flex-col gap-[6px]">
        <h4 className="text-base">{item.name}</h4>
        <p className="text-base tracking-[0.32.px]">
          {`$${formatPrice(item.discountedPrice)} x ${item.count} `}

          <span className="text-base font-bold tracking-[0.32.px]">{`$${formatPrice(
            item.sum,
          )}`}</span>
        </p>
      </div>
      <button onClick={() => deleteItem && deleteItem(item.name)} className="group">
        <DeleteIcon className="transition-fill fill-[#C3CAD9] duration-250 group-hover:fill-orange" />
      </button>
    </div>
  ));

  return (
    <Popover
      isOpen={true}
      classNames={{
        base: 'bg-grey-100 py-0 px-0 flex bg-background',
      }}
    >
      <PopoverTrigger>
        <motion.button
          className="relative h-[19px] w-[21px] bg-[url('/assets/images/icon-cart.svg')] focus-within:outline-transparent md:h-[20px] md:w-[22px]"
          transition={{
            type: 'spring',
            stiffness: 300,
          }}
          whileHover={{
            scale: [null, 1.2, 1.15],
            transition: { duration: 0.3, delay: 0, type: 'spring', stiffness: 250 },
          }}
        >
          {totalCount > 0 ? (
            <span className="absolute -right-[6px] -top-[5px] flex h-[13px] w-5 items-center justify-center rounded-[9px] bg-orange text-[10px] leading-[1] text-white">
              {totalCount}
            </span>
          ) : null}
          <span className="sr-only">cart</span>
        </motion.button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="rounded-radii flex w-full max-w-[360px] flex-col">
          <div className="flex min-h-[69px] items-center border-b border-b-black/10 px-6">
            <h3 className="text-[15px] font-bold">Cart</h3>
          </div>
          <div className="mt-6 flex flex-col gap-2 px-6">{cartContent}</div>
          <Button
            className="mx-6 mb-[34px] mt-[31px] h-[54px] self-stretch bg-orange text-white"
            onClick={() => checkout && checkout()}
          >
            Checkout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
