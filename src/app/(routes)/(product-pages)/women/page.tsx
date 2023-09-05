import { Slider } from '../components/Slider';
import { getProduct } from '@/lib/getProduct';

export default function Women() {
  const product = getProduct();

  return <Slider images={product.images} route="/women/" id="4" reverse />;
}
