import { Slider } from '../../../components/Slider';
import { getProduct } from '@/lib/getProduct';

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
  const product = getProduct();
  const images = product.images;

  return <Slider images={images} route="/women/" id={id} />;
}
