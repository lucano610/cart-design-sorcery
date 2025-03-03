
import { ProductType } from '../components/ProductCard';

// This is sample data - you would typically fetch this from an API
export const featuredProducts: ProductType[] = [
  {
    id: '1',
    name: 'Campus Pocket Tee',
    price: 39,
    originalPrice: 98,
    color: 'Twilight',
    slug: 'campus-pocket-tee-twilight'
  },
  {
    id: '2',
    name: 'Anti-Expo Tee',
    price: 62,
    originalPrice: 88,
    color: 'White',
    slug: 'anti-expo-tee-white'
  },
  {
    id: '3',
    name: 'Classic Crew Tee',
    price: 45,
    color: 'Black',
    slug: 'classic-crew-tee-black'
  },
  {
    id: '4',
    name: 'Everyday Sweatshirt',
    price: 85,
    color: 'Gray',
    slug: 'everyday-sweatshirt-gray'
  },
  {
    id: '5',
    name: 'Essential Hoodie',
    price: 120,
    originalPrice: 150,
    color: 'Navy',
    slug: 'essential-hoodie-navy'
  },
  {
    id: '6',
    name: 'Slim Fit Oxford Shirt',
    price: 88,
    color: 'Light Blue',
    slug: 'slim-fit-oxford-shirt-light-blue'
  }
];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
