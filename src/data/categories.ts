import { Category } from '../types/schema';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Clothing',
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'High-quality clothing for all occasions.'
  },
  {
    id: 2,
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'The latest gadgets and tech accessories.'
  },
  {
    id: 3,
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1631904742896-dc8d9013ab3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Complete your look with our stylish accessories.'
  },
  {
    id: 4,
    name: 'Home',
    slug: 'home',
    image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful items to brighten up your living space.'
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(
    (category) => category.slug.toLowerCase() === slug.toLowerCase()
  );
};