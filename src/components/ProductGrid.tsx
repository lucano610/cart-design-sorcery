
import ProductCard, { ProductType } from './ProductCard';

interface ProductGridProps {
  products: ProductType[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <div className="py-10 px-6">
      {title && (
        <h2 className="text-2xl font-light tracking-wide text-center mb-8">{title}</h2>
      )}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
