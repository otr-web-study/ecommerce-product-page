import { Slider } from '../../../components/Slider';
import { getProduct } from '@/lib/getProduct';

export default function PreviewModal({ params: { id } }: { params: { id: string } }) {
  const product = getProduct();

  return (
    <main>
      <Slider images={product.images} route="/men/" isPreview id={id} />
    </main>
  );
}
