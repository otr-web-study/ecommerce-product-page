'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container';
import Avatar from '@/assets/imgages/image-avatar.png';
import Logo from '@/assets/imgages/logo.svg';

export const Header = () => {
  return (
    <Container>
      <header className="smd:px-[18px] grid h-[68px] grid-cols-[min-content_min-content_1fr] items-center gap-4 px-6 md:h-[112px] md:gap-[min(58px,4vw)]">
        <button className='h-[15px] w-4 bg-[url("/assets/images/icon-menu.svg")] md:hidden'>
          <span className="sr-only">menu</span>
        </button>
        <Link href="/" className="h-[19px] w-[137px]">
          <Image src={Logo} alt="logo" />
        </Link>
        <nav className="hidden md:block">
          <ul className="gap flex gap-[min(32px,calc(2vw_+_4px))] text-[15px]">
            <li>
              <Link href="/collections/" className="drop-shadow-sh-link">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/men/">Men</Link>
            </li>
            <li>
              <Link href="/women/">Women</Link>
            </li>
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/contatct/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-[22px] justify-self-end md:gap-[min(45px,calc(3vw_+_2px))]">
          <button className="relative h-[19px] w-[21px] bg-[url('/assets/images/icon-cart.svg')] md:h-[20px] md:w-[22px]">
            <span className="absolute -right-[6px] -top-[5px] flex h-[13px] w-5 items-center justify-center rounded-[9px] bg-orange text-[10px] leading-[1] text-white">
              3
            </span>
            <span className="sr-only">cart</span>
          </button>
          <button>
            <Image className="h-6 w-6 md:h-[50px] md:w-[50px]" src={Avatar} alt="profile pic" />
            <span className="sr-only">profile</span>
          </button>
        </div>
      </header>
    </Container>
  );
};
