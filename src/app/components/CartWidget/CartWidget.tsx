'use client';
import { motion } from 'framer-motion';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
import { Cart } from '../Cart/Cart';
import { useCartWidget } from './useCartWidget';

export const CartWidget = () => {
  const { totalCount, isWidgetOpen, toggleWidgetOpen } = useCartWidget();

  return (
    <>
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
        onClick={toggleWidgetOpen}
      >
        {totalCount > 0 ? (
          <span className="absolute -right-[6px] -top-[5px] flex h-[13px] w-5 items-center justify-center rounded-[9px] bg-orange text-[10px] leading-[1] text-white">
            {totalCount}
          </span>
        ) : null}
        <span className="sr-only">cart</span>
      </motion.button>
      <Modal
        isOpen={isWidgetOpen}
        onOpenChange={toggleWidgetOpen}
        classNames={{
          base: 'max-w-[360px] bg-grey-100 py-0 px-0 flex bg-background !mx-2 md:!mx-5 right-0 !my-0 top-[76px] md:top-[90px] absolute shadow-sh-cart',
          backdrop: 'bg-transparent',
          wrapper: 'justify-end w-full max-w-[1320px] px-0 left-1/2 !-translate-x-1/2 grid',
          closeButton: 'hidden',
          body: 'px-0 py-0',
        }}
      >
        <ModalContent>
          <ModalBody>
            <Cart onCloseCart={toggleWidgetOpen} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
