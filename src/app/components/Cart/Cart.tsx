import { type FC } from 'react';
import { Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { formatPrice } from '@/lib/format';
import { DeleteIcon } from '@/app/components/icons/DeleteIcon';
import { useCart } from './useCart';

interface CartProps {
  onCloseCart: () => void;
}
export const Cart: FC<CartProps> = ({ onCloseCart }) => {
  const { cart, deleteItem, checkout } = useCart(onCloseCart);

  const content = cart.length ? (
    <>
      <div className="mt-6 flex flex-col gap-2 px-6">
        {cart.map((item) => (
          <div key={item.name} className="flex items-center gap-4">
            <Image
              src={item.images[0].thumbnail}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-radii-4"
            />
            <div className="flex flex-grow flex-col gap-[6px]">
              <h4 className="text-base">{item.name}</h4>
              <p className="text-base tracking-[0.32.px]">
                {`${formatPrice(item.discountedPrice)} x ${item.count} `}

                <span className="text-base font-bold tracking-[0.32.px]">
                  {formatPrice(item.sum)}
                </span>
              </p>
            </div>
            <button onClick={() => deleteItem(item.name)} className="group">
              <DeleteIcon className="fill-[#C3CAD9] transition-fill duration-250 group-hover:fill-orange" />
            </button>
          </div>
        ))}
      </div>
      <Button
        className="mx-6 mb-[34px] mt-[31px] h-[54px] self-stretch bg-orange text-base font-bold text-white"
        onClick={checkout}
      >
        Checkout
      </Button>
    </>
  ) : (
    <>
      <div className="grid h-full min-h-[190px] w-full place-content-center">
        <h2 className="text-[15px] font-bold tracking-[0.6px]">Your cart is empty.</h2>
      </div>
    </>
  );

  return (
    <div className="flex w-full max-w-[360px] flex-col rounded-radii">
      <div className="flex min-h-[69px] items-center border-b border-b-black/10 px-6">
        <h3 className="text-[15px] font-bold text-very-dark-blue">Cart</h3>
      </div>
      {content}
    </div>
  );
};
