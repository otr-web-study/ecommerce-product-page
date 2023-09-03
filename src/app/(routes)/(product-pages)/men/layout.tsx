import { ProductPage } from '../components/ProductPage/ProductPage';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid w-full justify-items-center gap-6 md:mt-[90px] md:grid-cols-2 md:gap-[min(126px,9vw)] ">
      {children}
      <ProductPage />
    </main>
  );
}
