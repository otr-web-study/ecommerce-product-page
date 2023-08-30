import { Product } from './product';

export interface CartItem extends Pick<Product, 'name' | 'discountedPrice' | 'images'> {
  count: number;
  sum: number;
}
