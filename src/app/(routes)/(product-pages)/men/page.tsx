import { Slider } from '../components/Slider';
import { getProduct } from '@/lib/getProduct';

export default function Men() {
  const product = getProduct();

  return <Slider images={product.images} route="/men/" />;
}
