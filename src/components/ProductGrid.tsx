
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
