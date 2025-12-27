import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 relative overflow-hidden">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 flex">
                <div className="w-1/3 bg-brand-red"></div>
                <div className="w-1/3 bg-white"></div>
                <div className="w-1/3 bg-brand-red"></div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="pokeball-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="10" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pokeball-pattern)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-white/20 group-hover:border-brand-red transition-colors">
                                <Image
                                    src="/logo.jpg"
                                    alt="Pokemon Center Perú Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-red transition-colors">POKEMON CENTER PERÚ</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Tu destino definitivo para Pokémon TCG. Coleccionables, cajas y cartas sueltas para verdaderos entrenadores.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-6">Categorias de Productos</h3>
                        <ul className="space-y-4">
                            <li><Link href="/shop?category=figuras" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Figuras de colección</Link></li>
                            <li><Link href="/shop?category=tcg" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Poke TCG</Link></li>
                            <li><Link href="/shop?category=ropa" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Ropa Pokémon</Link></li>
                            <li><Link href="/shop?category=videojuegos" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Videojuegos</Link></li>
                            <li><Link href="/shop?category=promos" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Poke Promos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-6">Servicio al cliente</h3>
                        <ul className="space-y-4">
                            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Políticas de privacidad</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Blog Maestro Pokémon</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Contactanos</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Terminos y condiciones</Link></li>
                            <li><Link href="/my-account" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Mi Cuenta</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-6">Síguenos</h3>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                                <span className="sr-only">Facebook</span>
                                <Image
                                    src="/facebook-icon.svg"
                                    alt="Facebook"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                                <span className="sr-only">Instagram</span>
                                <Image
                                    src="/instagram-icon.svg"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Pokemon Center Perú. Todos los derechos reservados.
                    </p>
                    <p className="text-gray-600 text-xs">
                        No afiliado con Nintendo o The Pokémon Company.
                    </p>
                </div>
            </div>
        </footer>
    );
}
