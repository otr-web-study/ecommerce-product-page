'use client';
import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type ProductImage } from '@/types/product';
import { useMatchMedia } from '@/app/hooks/useMatchMedia';
import { NextIcon } from '@/app/components/icons/NextIcon';
import { PrevIcon } from '@/app/components/icons/PrevIcon';

interface SliderProps {
  route: string;
  images: ProductImage[];
  id?: string;
  isPreview?: boolean;
}

export const Slider: FC<SliderProps> = ({ images, route, isPreview, id = '1' }) => {
  const [isMdScreen] = useMatchMedia(['(min-width: 768px)']);

  const currSrc = `/assets/images/image-product-${id}.jpg`;
  const idx = images.findIndex((img) => img.id === id);

  if (idx === -1) return null;

  const prevIdx = idx > 0 ? idx - 1 : images.length - 1;
  const nextIdx = idx < images.length - 1 ? idx + 1 : 0;

  const image = (
    <Image
      src={currSrc}
      alt="product image"
      width={550}
      height={550}
      className="w-full rounded-none md:rounded-radii-big"
    />
  );

  const content = isMdScreen ? (
    <Link href={`${route}preview/${id}`} scroll={false}>
      {image}
    </Link>
  ) : (
    image
  );

  const thumbsContent = isMdScreen ? (
    <div className="mx-auto flex w-full max-w-[445px] justify-between gap-1">
      {images.map((img) => (
        <Link
          href={`${route}${isPreview ? 'preview/' : 'photo/'}${img.id}`}
          key={img.id}
          replace={true}
          scroll={false}
        >
          <Image
            data-active={img.id === id}
            src={`/assets/images/image-product-${img.id}-thumbnail.jpg`}
            alt="thumbnail product's photo"
            width={92}
            height={92}
            className="rounded-radii-medium border-2 border-transparent transition-all duration-250 hover:opacity-50 data-[active='true']:border-orange data-[active='true']:opacity-50"
          />
        </Link>
      ))}
    </div>
  ) : null;

  return (
    <div
      data-preview={isPreview}
      className="group flex w-full flex-col gap-[30px] data-[preview='true']:max-w-[550px] md:max-w-[445px]"
    >
      <div className="relative">
        <Link
          data-page={!isPreview}
          href={`${route}${isPreview ? 'preview/' : 'photo/'}${images[prevIdx].id}`}
          replace={true}
          scroll={false}
          className="absolute left-[15px] top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white md:-left-5 md:data-[page='true']:hidden"
        >
          <PrevIcon />
        </Link>
        {content}
        <Link
          data-page={!isPreview}
          href={`${route}${isPreview ? 'preview/' : 'photo/'}${images[nextIdx].id}`}
          replace={true}
          scroll={false}
          className="absolute right-[15px] top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white md:-right-5 md:data-[page='true']:hidden"
        >
          <NextIcon />
        </Link>
      </div>
      {thumbsContent}
    </div>
  );
};
