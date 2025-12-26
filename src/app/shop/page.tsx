"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, Product } from '@/lib/data';
import ProductCard from '@/src/components/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState<string>(searchParam || '');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [activeExpansion, setActiveExpansion] = useState<string>('all');

  // Extract unique expansions
  const expansions = ['all', ...Array.from(new Set(products.map(p => p.expansion).filter(Boolean)))];

  useEffect(() => {
    let result = products;

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by expansion
    if (activeExpansion !== 'all') {
      result = result.filter(p => p.expansion === activeExpansion);
    }

    // Filter by price
    if (priceRange !== 'all') {
      if (priceRange === 'under-50') {
        result = result.filter(p => p.price < 50);
      } else if (priceRange === '50-150') {
        result = result.filter(p => p.price >= 50 && p.price <= 150);
      } else if (priceRange === 'over-150') {
        result = result.filter(p => p.price > 150);
      }
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(result);
  }, [activeCategory, searchQuery, priceRange, activeExpansion]);

  // Update state when URL params change
  useEffect(() => {
    if (categoryParam) setActiveCategory(categoryParam);
    if (searchParam) setSearchQuery(searchParam);
  }, [categoryParam, searchParam]);

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setPriceRange('all');
    setActiveExpansion('all');
  };

  const hasActiveFilters = activeCategory !== 'all' || searchQuery !== '' || priceRange !== 'all' || activeExpansion !== 'all';

  const categories = [
    { id: 'all', name: 'Todos los Productos' },
    { id: 'box', name: 'Cajas' },
    { id: 'combo', name: 'Combos' },
    { id: 'mystery-box', name: 'Mystery Boxes' },
    { id: 'single', name: 'Cartas Individuales' },
  ];

  const priceRanges = [
    { id: 'all', name: 'Todos los Precios' },
    { id: 'under-50', name: 'Menos de S/. 50' },
    { id: '50-150', name: 'S/. 50 - S/. 150' },
    { id: 'over-150', name: 'Más de S/. 150' },
  ];

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Tienda</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-900 font-medium">
                  <Filter size={18} />
                  <h2>Filtros</h2>
                </div>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-gray-500 hover:text-black underline flex items-center gap-1"
                  >
                    <X size={12} /> Limpiar
                  </button>
                )}
              </div>

              {/* Search */}
              <div>
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-0 py-2 border-b border-gray-200 text-sm focus:outline-none focus:border-black bg-transparent placeholder-gray-400"
                />
              </div>
              
              {/* Categories Accordion */}
              <details className="group" open>
                <summary className="flex items-center justify-between cursor-pointer list-none mb-4">
                  <h3 className="text-xs font-medium text-gray-900 uppercase tracking-widest">Categorías</h3>
                  <ChevronDown size={14} className="text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="space-y-2 pl-1">
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group/item">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        activeCategory === cat.id ? 'border-black' : 'border-gray-300 group-hover/item:border-gray-400'
                      }`}>
                        {activeCategory === cat.id && <div className="w-2 h-2 rounded-full bg-black" />}
                      </div>
                      <button
                        onClick={() => setActiveCategory(cat.id)}
                        className={`text-sm text-left ${
                          activeCategory === cat.id ? 'text-black font-medium' : 'text-gray-500 group-hover/item:text-gray-700'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </label>
                  ))}
                </div>
              </details>

              {/* Price Accordion */}
              <details className="group" open>
                <summary className="flex items-center justify-between cursor-pointer list-none mb-4">
                  <h3 className="text-xs font-medium text-gray-900 uppercase tracking-widest">Precio</h3>
                  <ChevronDown size={14} className="text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="space-y-2 pl-1">
                  {priceRanges.map(range => (
                    <label key={range.id} className="flex items-center gap-3 cursor-pointer group/item">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        priceRange === range.id ? 'border-black' : 'border-gray-300 group-hover/item:border-gray-400'
                      }`}>
                        {priceRange === range.id && <div className="w-2 h-2 rounded-full bg-black" />}
                      </div>
                      <button
                        onClick={() => setPriceRange(range.id)}
                        className={`text-sm text-left ${
                          priceRange === range.id ? 'text-black font-medium' : 'text-gray-500 group-hover/item:text-gray-700'
                        }`}
                      >
                        {range.name}
                      </button>
                    </label>
                  ))}
                </div>
              </details>

              {/* Expansion Accordion */}
              <details className="group" open>
                <summary className="flex items-center justify-between cursor-pointer list-none mb-4">
                  <h3 className="text-xs font-medium text-gray-900 uppercase tracking-widest">Expansión</h3>
                  <ChevronDown size={14} className="text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="space-y-2 pl-1">
                  {expansions.map(exp => (
                    <label key={exp as string} className="flex items-center gap-3 cursor-pointer group/item">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        activeExpansion === exp ? 'border-black' : 'border-gray-300 group-hover/item:border-gray-400'
                      }`}>
                        {activeExpansion === exp && <div className="w-2 h-2 rounded-full bg-black" />}
                      </div>
                      <button
                        onClick={() => setActiveExpansion(exp as string)}
                        className={`text-sm text-left ${
                          activeExpansion === exp ? 'text-black font-medium' : 'text-gray-500 group-hover/item:text-gray-700'
                        }`}
                      >
                        {exp === 'all' ? 'Todas las Expansiones' : exp}
                      </button>
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron productos</h3>
                <p className="text-gray-500">Intenta ajustar tu búsqueda o filtros para encontrar lo que buscas.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 bg-brand-red text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Limpiar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
