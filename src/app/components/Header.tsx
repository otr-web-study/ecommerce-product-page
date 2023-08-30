import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/app/components/Container';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { UserProfile } from './UserProfile';
import { CartWidget } from './CartWidget/CartWidget';
import Logo from '@/assets/imgages/logo.svg';

export const Header = () => {
  return (
    <Container>
      <header className="grid h-[68px] grid-cols-[min-content_min-content_1fr] items-center gap-4 px-6 md:h-[112px] md:gap-[min(58px,4vw)] md:border-b md:border-b-black/10 md:px-0">
        <Sidebar />
        <Link href="/" className="h-[19px] w-[137px]">
          <Image src={Logo} alt="logo" priority={true} className="-mt-[2px] h-auto w-auto" />
        </Link>
        <Navbar />
        <div className="flex items-center gap-[22px] justify-self-end md:gap-[min(45px,calc(3vw_+_2px))]">
          <CartWidget />
          <UserProfile />
        </div>
      </header>
    </Container>
  );
};
