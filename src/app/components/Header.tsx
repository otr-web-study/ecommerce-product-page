import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { UserProfile } from './UserProfile';
import { CartWidget } from './CartWidget/CartWidget';
import Logo from '@/assets/imgages/logo.svg';

export const Header = () => {
  return (
    <header className="grid h-[68px] grid-cols-[min-content_min-content_1fr] items-center gap-4 px-6 md:h-[112px] md:gap-[min(58px,4vw)] md:border-b md:border-b-black/10 md:px-0">
      <Sidebar />
      <Link href="/" className="w-[137px]">
        <Image src={Logo} alt="logo" priority={true} width={137} height={19} />
      </Link>
      <Navbar />
      <div className="flex items-center gap-[22px] justify-self-end md:gap-[min(45px,calc(3vw_+_2px))]">
        <CartWidget />
        <UserProfile />
      </div>
    </header>
  );
};
