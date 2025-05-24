import { Product } from '../types/schema';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    description: 'A comfortable and versatile white t-shirt made from 100% organic cotton.',
    price: 24.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    ],
    category: 'Clothing',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    new: true,
    featured: true
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    description: 'Classic slim fit jeans in dark blue wash, perfect for any casual outfit.',
    price: 59.99,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    ],
    category: 'Clothing',
    rating: 4.2,
    reviews: 95,
    inStock: true,
    trending: true
  },
  {
    id: 3,
    name: 'Leather Crossbody Bag',
    description: 'Stylish leather crossbody bag with adjustable strap and multiple compartments.',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    ],
    category: 'Accessories',
    rating: 4.8,
    reviews: 63,
    inStock: true,
    sale: true,
    featured: true
  },
  {
    id: 4,
    name: 'Wireless Bluetooth Earbuds',
    description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
    price: 129.99,
    originalPrice: 159.99,
    images: [
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    ],
    category: 'Electronics',
    rating: 4.6,
    reviews: 214,
    inStock: true,
    trending: true,
    sale: true
  },
  {
    id: 5,
    name: 'Stainless Steel Water Bottle',
    description: 'Eco-friendly and insulated water bottle to keep your drinks hot or cold for hours.',
    price: 34.99,
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1570533740207-4c73579d7e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    ],
    category: 'Home',
    rating: 4.4,
    reviews: 87,
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'Oversized Knit Sweater',
    description: 'Cozy oversized knit sweater perfect for staying warm during colder months.',
    price: 74.99,
    originalPrice: 94.99,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1583744946564-b52d01a7b321?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    ],
    category: 'Clothing',
    rating: 4.3,
    reviews: 56,
    inStock: true,
    sale: true
  },
  {
    id: 7,
    name: 'Smart Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and GPS.',
    price: 149.99,
    images: [
      'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1559311648-b7aff6a881a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    ],
    category: 'Electronics',
    rating: 4.7,
    reviews: 172,
    inStock: true,
    new: true,
    trending: true
  },
  {
    id: 8,
    name: 'Minimalist Gold Necklace',
    description: 'Delicate gold-plated necklace with a simple pendant, suitable for everyday wear.',
    price: 42.99,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    ],
    category: 'Jewelry',
    rating: 4.5,
    reviews: 89,
    inStock: true,
    featured: true
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter((product) => product.trending);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((product) => product.new);
};

export const getSaleProducts = (): Product[] => {
  return products.filter((product) => product.sale);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter((product) => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter((product) => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};