import type { FC, RefObject } from 'react';
import { Popover, PopoverContent } from '@nextui-org/react';

interface PopoverSentProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  triggerRef: RefObject<HTMLButtonElement>;
}
export const PopoverSent: FC<PopoverSentProps> = ({ isOpen, setIsOpen, triggerRef }) => {
  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerRef={triggerRef}
      placement="top"
      showArrow
    >
      <div></div>
      <PopoverContent>
        <h2>Your message has been sent. Thanks for that.</h2>
      </PopoverContent>
    </Popover>
  );
};
