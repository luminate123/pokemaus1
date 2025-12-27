import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";
import ProductCard from "@/src/components/ProductCard";
import FadeIn from "@/src/components/FadeIn";

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <FadeIn direction="down">
            <div className="mb-6 animate-bounce px-2">
              <span className="inline-block bg-brand-red text-white px-4 py-2 md:px-6 md:py-2 rounded-xl md:rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm shadow-lg max-w-full leading-relaxed">
                ¡Bienvenidos a Pokemon Center Perú!
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight drop-shadow-sm">
              REALIZAMOS ENVÍOS
              <span className="block text-brand-yellow text-stroke-red drop-shadow-md mt-2">EL MISMO DÍA</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="bg-brand-red text-white inline-block px-4 py-2 md:px-8 md:py-3 rounded-xl md:rounded-full font-black text-sm md:text-xl uppercase tracking-wider shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 mb-12 max-w-full mx-2">
              Exclusivo para Lima y Callao
            </div>
          </FadeIn>

          {/* Partners Logos */}
          <FadeIn delay={0.6} direction="up">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-4xl mx-auto border border-gray-100">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder for partner logos - using text for now as I don't have the SVGs */}
                <span className="font-bold text-xl text-gray-400">Mercado Libre</span>
                <span className="font-bold text-xl text-gray-400">Rappi</span>
                <span className="font-bold text-xl text-gray-400">Shopstar</span>
                <span className="font-bold text-xl text-gray-400">Ripley</span>
                <span className="font-bold text-xl text-gray-400">Falabella</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Navigation Arrows (Visual only for now) */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-gray-800 transition-all hover:scale-110 hidden md:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-gray-800 transition-all hover:scale-110 hidden md:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </section>

      {/* Preventas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="left">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">PREVENTAS EN POKEMON CENTER PERÚ</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.1} className="h-full">
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Promos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="right">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">POKE PROMOS PARA TÍ</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.1} className="h-full">
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Novedades Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="left">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">NOVEDADES EN POKEMON CENTER PERÚ</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.1} className="h-full">
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
