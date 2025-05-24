import { CartItem } from "@shared/schema";

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  cartItemsCount: number;
  subtotal: number;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'rating';

export interface ProductFilterOptions {
  categories?: string[];
  minPrice?: number;
  maxPrice?: number;
  ratings?: number[];
  search?: string;
  sort?: SortOption;
}
