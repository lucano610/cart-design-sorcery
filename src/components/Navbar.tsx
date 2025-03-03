
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="announcement-bar">
        Winter sale | Extra 20% off further markdowns
      </div>
      
      <nav className="px-6 py-5 flex items-center justify-between border-b border-border">
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/men" className="header-link">Men</Link>
          <Link to="/women" className="header-link">Women</Link>
          <Link to="/sale" className="header-link">Sale</Link>
        </div>
        
        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-xl sm:text-2xl font-light tracking-[0.15em] uppercase">
            Minimal Store
          </Link>
        </div>
        
        {/* Right navigation items */}
        <div className="flex items-center space-x-6">
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <Search size={20} />
          </button>
          <Link to="/account" aria-label="Account" className="hover:opacity-70 transition-opacity">
            <User size={20} />
          </Link>
          <Link to="/cart" aria-label="Shopping bag" className="hover:opacity-70 transition-opacity relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute z-50 bg-background w-full border-b border-border animate-fade-in">
          <div className="p-6 flex flex-col space-y-6">
            <Link to="/men" className="header-link" onClick={() => setIsMenuOpen(false)}>Men</Link>
            <Link to="/women" className="header-link" onClick={() => setIsMenuOpen(false)}>Women</Link>
            <Link to="/sale" className="header-link" onClick={() => setIsMenuOpen(false)}>Sale</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
