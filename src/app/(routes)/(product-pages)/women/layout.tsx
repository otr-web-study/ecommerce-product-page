import { ProductPage } from '../components/ProductPage';

export default function Layout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <main className="grid w-full justify-items-center gap-6 pb-20 md:mt-[90px] md:grid-cols-2 md:gap-[min(126px,9vw)] ">
      {props.children}
      <ProductPage />
      {props.modal}
    </main>
  );
}
