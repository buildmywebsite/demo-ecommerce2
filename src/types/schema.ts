// Types for the UI-only version
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  new?: boolean;
  sale?: boolean;
  trending?: boolean;
  featured?: boolean;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
};

export type CartItem = {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: {
    size?: string;
    color?: string;
  };
};