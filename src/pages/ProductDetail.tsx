
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SizeSelector from '../components/SizeSelector';
import { featuredProducts, sizes } from '../data/products';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // In a real app, you would fetch the product based on the slug
  const product = featuredProducts.find(p => p.slug === slug);
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <Layout>
        <div className="py-20 px-6 text-center">
          <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="inline-block px-6 py-3 bg-black text-white text-sm uppercase tracking-wider font-medium">
            Return to Home
          </Link>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must select a size before adding to cart",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would add the item to the cart
    console.log('Added to cart:', { ...product, size: selectedSize, quantity });
    
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) added to your cart`,
    });
  };
  
  return (
    <Layout>
      <div className="container max-w-6xl py-8 px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image Placeholder */}
          <div className="bg-[#f1f1f1] aspect-[1/1.25] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              Product Image Placeholder
            </div>
          </div>
          
          {/* Product Details */}
          <div className="pt-2">
            <h1 className="text-2xl font-light tracking-wide uppercase">{product.name}</h1>
            <p className="text-sm uppercase tracking-wider mt-1">{product.color}</p>
            
            <div className="flex items-center mt-4">
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through mr-3">
                  ${product.originalPrice.toFixed(0)}
                </span>
              )}
              <span className={`text-lg ${product.originalPrice ? 'text-black font-medium' : ''}`}>
                ${product.price.toFixed(0)}
              </span>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-medium mb-3">Description</h3>
              <p className="text-muted-foreground">
                Premium quality, ethically sourced materials with a focus on comfort and durability.
                Perfect for everyday wear with a minimal design aesthetic.
              </p>
            </div>
            
            {/* Size Selector */}
            <SizeSelector 
              sizes={sizes}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
            
            {/* Quantity Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex border border-gray-300 w-28">
                <button 
                  className="px-3 py-2 text-lg"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <div className="flex-1 flex items-center justify-center">
                  {quantity}
                </div>
                <button 
                  className="px-3 py-2 text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              className="w-full mt-8 py-4 bg-black text-white text-sm uppercase tracking-wider font-medium flex items-center justify-center hover:bg-opacity-90 transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={18} className="mr-2" />
              Add to Cart
            </button>
            
            {/* Additional Info */}
            <div className="mt-12 space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Shipping</h3>
                <p className="text-sm text-muted-foreground">Free standard shipping on all orders over $100.</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Returns</h3>
                <p className="text-sm text-muted-foreground">Free returns within 30 days of purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
