"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data';
import { useCart } from './CartProvider';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50 rounded-xl mb-4 border border-gray-100 group-hover:border-brand-red/30 transition-colors duration-300 holo-effect shadow-sm group-hover:shadow-md">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        {product.category === 'mystery-box' && (
          <div className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-20">
            Misterio
          </div>
        )}
        {product.category === 'combo' && (
          <div className="absolute top-2 right-2 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-20">
            Combo
          </div>
        )}
      </Link>
      <div>
        <h3 className="text-base font-medium text-gray-900 mb-1 group-hover:text-brand-red transition-colors">
          <Link href={`/product/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-gray-900">S/. {product.price.toFixed(2)}</p>
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation to product page
              addToCart(product);
            }}
            className="relative z-10 p-2 rounded-full text-gray-400 hover:text-white hover:bg-brand-red transition-all duration-300"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
