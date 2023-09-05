import { type FC } from 'react';

interface CloseIconProps {
  className?: string;
}

export const NextIcon = ({ className = '' }) => {
  return (
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="m2 1 8 8-8 8" stroke="current" strokeWidth="3" fill="none" fillRule="evenodd" />
    </svg>
  );
};
