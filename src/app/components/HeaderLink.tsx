import { type FC, ReactNode } from 'react';
import Link from 'next/link';

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}
export const HeaderLink: FC<HeaderLinkProps> = ({ href, children, onClick }) => {
  return (
    <Link
      href={href}
      className="md:text-grayish-blue md:hover:text-very-dark-blue text-inherit transition-[color] duration-250"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
