export interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  isHotDeal?: boolean;
  category: string;
  brand: string;
  year: string;
  origin: string;
}

