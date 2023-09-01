import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-home-bg">
      <div className="mx-auto grid min-h-screen max-w-[1140px] grid-cols-1 grid-rows-[300px_auto] place-items-center gap-x-4 px-[50px] py-[35px] md:grid-cols-[60%_40%] md:grid-rows-[400px_auto]">
        <div className="relative w-60 md:w-[277px]">
          <Image
            src="/assets/images/image-product-1.jpg"
            width={277}
            height={277}
            alt="product 1"
            className="rounded-radii"
          />
          <Image
            src="/assets/images/image-product-4-thumbnail.jpg"
            width={62}
            height={62}
            alt="product 4"
            className="absolute -left-[40px] -top-[40px] w-[24%] rounded-radii md:-left-[70px] md:-top-[60px]"
          />
          <Image
            src="/assets/images/image-product-3-thumbnail.jpg"
            width={145}
            height={145}
            alt="product 3"
            className="absolute -left-[18%] top-[30%] w-[36%] rounded-radii md:-left-[27%] md:w-[46%]"
          />
          <Image
            src="/assets/images/image-product-2-thumbnail.jpg"
            width={88}
            height={88}
            alt="product 2"
            className="absolute -bottom-[10%] -right-[20%] w-[32%] rounded-radii"
          />
        </div>
        <Link
          href="/collections"
          className="bg-rusty-orange relative inline-grid aspect-square w-[170px] place-items-center rounded-full px-2 text-xl uppercase tracking-[1.25px] text-white/80 after:absolute after:h-full after:w-full after:rounded-full after:bg-orange/10 after:opacity-0 after:content-[''] after:[transition:opacity_500ms_linear,transform_750ms_ease-in-out] hover:after:scale-150 after:hover:opacity-100 md:row-span-2 md:w-60 md:text-[32px] md:tracking-[2px]"
        >
          Explore
        </Link>
        <div>
          <h1 className="text-shadow md:text-shadow-md mt-4 text-center text-4xl font-bold leading-[96%] text-orange  md:mt-0 md:text-start md:text-[60px] lg:text-[90px]">
            E-commerce product page
          </h1>
          <h2 className="text-dark-grayish-blue mt-16 text-center text-2xl capitalize tracking-[7px] md:text-start md:tracking-[12px]">
            front-end mentor project
          </h2>
        </div>
      </div>
    </main>
  );
}
