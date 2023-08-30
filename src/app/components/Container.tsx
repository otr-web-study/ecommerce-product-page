import { type FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="w-full max-w-[1180px] md:px-5">{children}</div>;
};
