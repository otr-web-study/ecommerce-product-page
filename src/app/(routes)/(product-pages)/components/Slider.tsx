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
      width={500}
      height={500}
      className="md:rounded-radii-big w-full rounded-none"
    />
  );

  const content = isMdScreen ? <Link href={`${route}preview/${id}`}>{image}</Link> : image;

  const thumbsContent = isMdScreen ? (
    <div className="flex justify-between gap-1">
      {images.map((img) => (
        <Link href={`${route}${isPreview ? 'preview/' : 'photo/'}${img.id}`} key={img.id}>
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
    <div className="flex w-full flex-col gap-[30px] md:max-w-[445px]">
      <div className="relative">
        <Link
          href={`${route}${isPreview ? 'preview/' : 'photo/'}${images[prevIdx].id}`}
          className="absolute left-[15px] top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white md:hidden"
        >
          <PrevIcon />
        </Link>
        {content}
        <Link
          href={`${route}${isPreview ? 'preview/' : 'photo/'}${images[nextIdx].id}`}
          className="absolute right-[15px] top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white md:hidden"
        >
          <NextIcon />
        </Link>
      </div>
      {thumbsContent}
    </div>
  );
};
