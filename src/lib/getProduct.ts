import data from '@/data/product.json';
import type { Product } from '@/types/product';

export const getProduct = (): Product => {
  return data;
};
