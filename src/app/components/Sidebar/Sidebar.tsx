'use client';
import { type FC } from 'react';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
import { Navbar } from '../Navbar';
import { useSidebar } from './useSidebar';

interface SidebarProps {}
export const Sidebar: FC<SidebarProps> = () => {
  const { isSidebarOpen, toggleSidebarIsOpen } = useSidebar();

  return (
    <>
      <button
        className='h-[15px] w-4 bg-[url("/assets/images/icon-menu.svg")] md:hidden'
        onClick={toggleSidebarIsOpen}
      >
        <span className="sr-only">menu</span>
      </button>
      <Modal
        isOpen={isSidebarOpen}
        onOpenChange={toggleSidebarIsOpen}
        classNames={{
          base: 'left-0 w-2/3 mx-0 rounded-none h-full my-0 sm:mx-0 sm:my-0',
          backdrop: 'bg-overlay',
          wrapper: 'justify-start',
          closeButton:
            'left-6 top-6 right-auto px-0 py-0 transition-transform duration-200 hover:bg-transparent hover:scale-110',
        }}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              x: -40,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
      >
        <ModalContent>
          {() => (
            <ModalBody>
              <Navbar type="sidebar" onLinkClick={toggleSidebarIsOpen} />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
