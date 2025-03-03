
import { ProductType } from '../components/ProductCard';

// This is sample data - you would typically fetch this from an API
export const featuredProducts: ProductType[] = [
  {
    id: '1',
    name: 'Campus Pocket Tee',
    price: 39,
    originalPrice: 98,
    color: 'Twilight',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000',
    slug: 'campus-pocket-tee-twilight'
  },
  {
    id: '2',
    name: 'Anti-Expo Tee',
    price: 62,
    originalPrice: 88,
    color: 'White',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000',
    slug: 'anti-expo-tee-white'
  },
  {
    id: '3',
    name: 'Classic Crew Tee',
    price: 45,
    color: 'Black',
    imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000',
    slug: 'classic-crew-tee-black'
  },
  {
    id: '4',
    name: 'Everyday Sweatshirt',
    price: 85,
    color: 'Gray',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000',
    slug: 'everyday-sweatshirt-gray'
  },
  {
    id: '5',
    name: 'Essential Hoodie',
    price: 120,
    originalPrice: 150,
    color: 'Navy',
    imageUrl: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=1000',
    slug: 'essential-hoodie-navy'
  },
  {
    id: '6',
    name: 'Slim Fit Oxford Shirt',
    price: 88,
    color: 'Light Blue',
    imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000',
    slug: 'slim-fit-oxford-shirt-light-blue'
  }
];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
