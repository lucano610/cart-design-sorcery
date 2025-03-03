
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { featuredProducts } from '../data/products';

const Shop = () => {
  return (
    <Layout>
      <div className="py-10 px-6">
        <h1 className="text-3xl font-light tracking-wide text-center mb-12">Shop All Products</h1>
        <ProductGrid products={featuredProducts} />
      </div>
    </Layout>
  );
};

export default Shop;
