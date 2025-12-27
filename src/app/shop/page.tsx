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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {activeCategory === 'all' ? 'Todos los Productos' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Filter size={20} /> Filtros
                </h2>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-brand-red hover:text-red-700 font-medium"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Precio</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${priceRange === range.id ? 'bg-brand-red border-brand-red' : 'border-gray-300 group-hover:border-brand-red'}`}>
                        {priceRange === range.id && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <input 
                        type="radio" 
                        name="price" 
                        className="hidden"
                        checked={priceRange === range.id}
                        onChange={() => setPriceRange(range.id)}
                      />
                      <span className={`text-sm ${priceRange === range.id ? 'text-gray-900 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                        {range.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Expansion Filter */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Expansión / Tipo</h3>
                <div className="space-y-2">
                  {expansions.map((expansion) => (
                    <label key={expansion as string} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${activeExpansion === expansion ? 'bg-brand-red border-brand-red' : 'border-gray-300 group-hover:border-brand-red'}`}>
                        {activeExpansion === expansion && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <input 
                        type="radio" 
                        name="expansion" 
                        className="hidden"
                        checked={activeExpansion === expansion}
                        onChange={() => setActiveExpansion(expansion as string)}
                      />
                      <span className={`text-sm ${activeExpansion === expansion ? 'text-gray-900 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                        {expansion === 'all' ? 'Todas' : expansion}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
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
