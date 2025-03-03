
import { useState } from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { featuredProducts } from '../data/products';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the subscription logic here
    console.log('Subscribed with:', email);
    setEmail('');
    // You might want to show a success toast or message
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070" 
            alt="Fashion hero" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider uppercase mb-4">New Season Collection</h1>
            <p className="text-lg md:text-xl font-light mb-8 max-w-xl mx-auto">Discover timeless designs with minimalist aesthetics and premium quality</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/shop-men" className="px-8 py-3 bg-white text-black uppercase text-sm tracking-wider font-medium hover:bg-opacity-90 transition-colors">
                Shop Men
              </a>
              <a href="/shop-women" className="px-8 py-3 bg-white text-black uppercase text-sm tracking-wider font-medium hover:bg-opacity-90 transition-colors">
                Shop Women
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductGrid products={featuredProducts} title="Featured Products" />

      {/* Brand Philosophy Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">Thoughtful Design</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our products are crafted with meticulous attention to detail, focusing on clean silhouettes, 
            premium materials, and timeless designs that transcend trends.
          </p>
          <a href="/our-story" className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors">
            Our Philosophy
          </a>
        </div>
      </section>

      {/* Two-column Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#f1f1f1] flex items-center justify-center p-12 md:p-20">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">New Arrivals</h2>
            <p className="text-muted-foreground mb-8">
              Explore our latest collection featuring essential pieces designed for everyday versatility.
            </p>
            <a href="/new-arrivals" className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-wider font-medium hover:bg-opacity-90 transition-colors">
              Shop Now
            </a>
          </div>
        </div>
        <div className="h-[50vh] md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" 
            alt="New arrivals" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">Stay Connected</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive updates on new collections, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-border focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider font-medium hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
