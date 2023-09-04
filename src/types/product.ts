export interface ProductImage {
  link: string;
  thumbnail: string;
  id: string;
}

export interface Product {
  manufacturer: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  discountedPrice: number;
  images: ProductImage[];
}
