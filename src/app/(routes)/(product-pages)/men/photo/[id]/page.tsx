import { Slider } from '../../../components/Slider';
import { getProduct } from '@/lib/getProduct';

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
  const product = getProduct();

  return <Slider images={product.images} route="/men/" id={id} />;
}
