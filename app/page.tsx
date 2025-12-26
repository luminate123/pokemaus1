import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero.png"
            alt="Hero Background"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop?category=box" className="group block">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100 mb-4">
                <Image 
                  src="https://tcgplayer-cdn.tcgplayer.com/product/501257_in_1000x1000.jpg" 
                  alt="Cajas" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Cajas</h3>
              <p className="text-sm text-gray-500 mt-1">Explora nuestra colección</p>
            </Link>
            <Link href="/shop?category=combo" className="group block">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100 mb-4">
                <Image 
                  src="https://tcgplayer-cdn.tcgplayer.com/product/516576_in_1000x1000.jpg" 
                  alt="Combos" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Combos</h3>
              <p className="text-sm text-gray-500 mt-1">Los mejores paquetes</p>
            </Link>
            <Link href="/shop?category=mystery-box" className="group block">
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100 mb-4">
                <Image 
                  src="https://www.pokeperustore.pe/wp-content/uploads/2023/08/1838.jpg" 
                  alt="Cajas Misteriosas" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Cajas Misteriosas</h3>
              <p className="text-sm text-gray-500 mt-1">Descubre lo inesperado</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Sell Your Cards Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative Pokeball Background */}
        <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="white" stroke="white" strokeWidth="2"/>
            <path d="M 5,50 A 45,45 0 0,1 95,50" fill="white" stroke="none"/>
            <path d="M 5,50 L 95,50" stroke="white" strokeWidth="5"/>
            <circle cx="50" cy="50" r="15" fill="transparent" stroke="white" strokeWidth="5"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-yellow font-bold tracking-widest uppercase text-xs mb-2 block">¡Te compramos tus cartas!</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">¿Tienes cartas para vender?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Compramos tus colecciones y cartas individuales. Obtén una cotización rápida y justa por tus tesoros Pokémon.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-widest text-black bg-brand-yellow hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-yellow-400/20"
          >
            Vender mis cartas
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Destacados</h2>
            <Link href="/shop" className="text-sm font-medium text-gray-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5">
              Ver todos
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
