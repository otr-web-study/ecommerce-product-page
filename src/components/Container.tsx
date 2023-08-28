import { type FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="smd:px-[min(150px,calc(11vw_+_20px))] w-full max-w-[1440px] px-0">
      {children}
    </div>
  );
};
