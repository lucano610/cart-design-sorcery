
import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface ProductType {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  color: string;
  slug: string;
}

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [name, setName] = useState(product.name);
  const [color, setColor] = useState(product.color);
  const [price, setPrice] = useState(product.price);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || !isNaN(Number(value))) {
      setPrice(value === '' ? 0 : Number(value));
    }
  };

  return (
    <div className="group">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="bg-[#f1f1f1] aspect-[1/1.25] flex items-center justify-center">
          {/* Placeholder div instead of image */}
          <div className="text-center text-muted-foreground text-xs uppercase tracking-wider">
            Product Image
          </div>
        </div>
      </Link>
      
      <div className="mt-4 space-y-1">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-center uppercase text-sm tracking-wider font-medium border-b border-transparent hover:border-gray-300 focus:border-black focus:outline-none"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full text-center text-xs uppercase tracking-wider border-b border-transparent hover:border-gray-300 focus:border-black focus:outline-none"
        />
        <div className="flex justify-center items-center mt-1">
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            className="w-20 text-sm text-center border-b border-transparent hover:border-gray-300 focus:border-black focus:outline-none"
            placeholder="Price"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
