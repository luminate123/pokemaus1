"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Search, Menu, X, User, Sparkles, Ghost, Gamepad2, Home, Shirt, Package, Star, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { useCart } from './CartProvider';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, cartTotal } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  const categories = [
    { name: 'NOVEDADES', icon: Sparkles, href: '/shop?category=novedades', id: 'novedades', color: 'text-red-600' },
    { name: 'PELUCHES', icon: Ghost, href: '/shop?category=peluches', id: 'peluches' },
    { name: 'FIGURAS', icon: Star, href: '/shop?category=figuras', id: 'figuras' },
    { name: 'TCG', icon: Package, href: '/shop?category=tcg', id: 'tcg' },
    { name: 'HOME', icon: Home, href: '/shop?category=home', id: 'home' },
    { name: 'ROPA', icon: Shirt, href: '/shop?category=ropa', id: 'ropa' },
    { name: 'PUKLLAY', icon: Gamepad2, href: '/shop?category=pukllay', id: 'pukllay' },
    { name: 'OTROS', icon: MoreHorizontal, href: '/shop?category=otros', id: 'otros' },
    { name: 'PROMOS!', icon: Star, href: '/shop?category=promos', id: 'promos', color: 'text-yellow-500' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-gray-100 shadow-sm">
                <Image 
                  src="/logo.jpg" 
                  alt="Pokemon Center Perú Logo" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col -space-y-1 hidden sm:flex">
                <span className="text-xl font-black text-gray-900 tracking-tighter leading-none group-hover:text-brand-red transition-colors">POKEMON</span>
                <span className="text-xl font-black text-gray-900 tracking-tighter leading-none">CENTER PERÚ</span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Busca tu figura favorita"
                  className="w-full pl-6 pr-12 py-3 rounded-full border-2 border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 text-gray-700 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-brand-red hover:bg-red-50 rounded-full transition-colors">
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              
              <Link href="/cart" className="flex items-center gap-3 group">
                <div className="relative">
                  <ShoppingBag size={28} className="text-gray-700 group-hover:text-brand-red transition-colors" />
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                    {cartCount}
                  </span>
                </div>
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-xs text-gray-500 font-bold uppercase">Carrito</span>
                  <span className="text-sm font-black text-gray-900">S/ {cartTotal.toFixed(2)}</span>
                </div>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 hover:text-brand-red focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Bar (Desktop) */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {categories.map((cat) => {
              const isActive = currentCategory === cat.id;
              return (
                <Link 
                  key={cat.name} 
                  href={cat.href}
                  className={`flex flex-col items-center gap-2 group transition-colors ${isActive ? 'text-brand-red' : (cat.color || 'text-gray-600')} hover:text-brand-red`}
                >
                  <cat.icon 
                    size={24} 
                    strokeWidth={isActive ? 2.5 : 1.5} 
                    className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
                  />
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-brand-red' : ''}`}>{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 h-[calc(100vh-96px)] overflow-y-auto">
          <div className="p-4 space-y-4">
            <form onSubmit={handleSearch} className="relative mb-6">
              <input
                type="text"
                placeholder="Busca tu figura favorita"
                className="w-full pl-4 pr-10 py-3 rounded-full border-2 border-brand-red focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-red">
                <Search size={20} />
              </button>
            </form>

            <div className="grid grid-cols-3 gap-4">
              {categories.map((cat) => (
                <Link 
                  key={cat.name} 
                  href={cat.href}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <cat.icon size={24} className={cat.color || 'text-gray-600'} />
                  <span className="text-[10px] font-bold uppercase text-gray-900">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
