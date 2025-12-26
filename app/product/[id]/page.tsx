"use client";

import { useState, use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { useCart } from '@/components/CartProvider';
import { ShoppingCart, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const categoryNames: Record<string, string> = {
    'box': 'Caja',
    'combo': 'Combo',
    'mystery-box': 'Caja Misteriosa',
    'single': 'Carta Individual'
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/shop" className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Volver a la Tienda
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.category === 'mystery-box' && (
              <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                Misterio
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                {categoryNames[product.category] || product.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{product.name}</h1>
            <p className="text-2xl font-medium text-gray-900 mb-8">S/. {product.price.toFixed(2)}</p>
            
            <div className="prose prose-gray mb-10">
              <p className="text-gray-600 text-lg leading-relaxed font-light">{product.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex-1 py-4 px-8 text-sm font-medium uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                  isAdded 
                    ? 'bg-green-600 text-white' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={18} /> Agregado
                  </>
                ) : (
                  <>
                    Agregar al Carrito
                  </>
                )}
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-xs font-medium text-gray-900 uppercase tracking-widest mb-6">Características</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                  Producto Pokémon TCG Auténtico
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                  Sellado de Fábrica
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                  Envío Rápido
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
