"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from './CartProvider';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="shrink-0 flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-100 shadow-sm">
                <Image 
                  src="/logo.jpg" 
                  alt="POKEMAUS Logo" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-black text-gray-900 tracking-tighter leading-none group-hover:text-brand-red transition-colors">POKE</span>
                <span className="text-xl font-black text-gray-900 tracking-tighter leading-none">MAUS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
              Inicio
            </Link>
            <Link href="/shop" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
              Tienda
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
              Nosotros
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
              Contacto
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative group">
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-0 pr-8 py-1 border-b border-gray-200 text-sm focus:outline-none focus:border-black w-32 transition-all focus:w-48 bg-transparent placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black">
                <Search size={16} />
              </button>
            </form>
            
            <Link href="/cart" className="relative text-gray-500 hover:text-black transition-colors">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-medium rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-red focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/shop" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Tienda
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link 
              href="/cart" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Carrito ({cartCount})
            </Link>
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-brand-red"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
