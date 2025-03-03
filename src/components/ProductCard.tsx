
import { Link } from 'react-router-dom';

export interface ProductType {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  color: string;
  imageUrl: string;
  slug: string;
}

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="mt-4 space-y-1">
          <h3 className="text-center uppercase text-sm tracking-wider font-medium">
            {product.name}
          </h3>
          <p className="text-center text-xs uppercase tracking-wider">
            {product.color}
          </p>
          <div className="flex justify-center items-center space-x-2 mt-1">
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(0)}
              </span>
            )}
            <span className={`text-sm ${product.originalPrice ? 'text-black font-medium' : ''}`}>
              ${product.price.toFixed(0)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
