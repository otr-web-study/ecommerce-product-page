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
      className="transition-text-shadow duration-250 hover:link-shadow"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
