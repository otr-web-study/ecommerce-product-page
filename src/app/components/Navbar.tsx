'use client';
import { type FC } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { HeaderLink } from './HeaderLink';

const navItems = [
  { href: '/collections', title: 'Collections' },
  { href: '/men', title: 'Men' },
  { href: '/women', title: 'Women' },
  { href: '/about', title: 'About' },
  { href: '/contact', title: 'Contact' },
];

type NavbarType = 'sidebar' | 'menu';

interface NavbarProps {
  type?: NavbarType;
  onLinkClick?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ type = 'menu', onLinkClick }) => {
  const currentRoute = usePathname();

  const navClass = type === 'menu' ? 'hidden md:block' : 'mt-[92px]';
  const ulClass =
    type === 'menu'
      ? 'gap-[min(32px,3vw)] text-[15px]'
      : 'flex-col text-[17px] font-bold tracking-[0.51px] gap-[17px]';
  const liClass = (href: string) =>
    type === 'menu' ? '' : `hover:text-orange ${currentRoute === href ? 'text-orange' : ''}`;

  return (
    <nav className={navClass}>
      <motion.ul className={`flex ${ulClass}`}>
        {navItems.map(({ href, title }) => (
          <motion.li key={href} className={`relative ${liClass(href)}`}>
            <HeaderLink href={href} onClick={onLinkClick}>
              {title}
            </HeaderLink>
            {currentRoute === href && type === 'menu' ? (
              <motion.span
                layoutId="active"
                className="absolute -bottom-[45px] left-0 right-0 h-1 bg-orange "
              />
            ) : null}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};
