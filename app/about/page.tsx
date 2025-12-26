import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3 block">Nuestra Historia</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">POKEMAUS</h1>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed font-light">
          <p className="text-xl text-gray-900 font-normal mb-8 text-center">
            Somos una tienda apasionada por los videojuegos, Trading Card Games (TCG) y juegos de mesa.
          </p>
          
          <div className="my-12 relative aspect-[16/9] bg-gray-100 overflow-hidden">
             <Image 
                src="/logo.jpg" 
                alt="POKEMAUS Store" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
          </div>

          <p className="mb-6">
            En <strong>POKEMAUS</strong>, nos encanta llevar experiencias únicas a nuestros clientes, creando un espacio donde puedan sumergirse en emocionantes aventuras y conectar con otros entusiastas del mundo del entretenimiento.
          </p>

          <p className="mb-6">
            Nos esforzamos por ser mucho más que una simple tienda: somos un destino donde los jugadores pueden encontrar todo lo que necesitan para disfrutar al máximo de su pasión. Nuestro equipo está formado por amantes de los videojuegos, coleccionistas de TCG y fanáticos de los juegos de mesa.
          </p>
          
          <p className="mb-8">
            Estamos aquí para ayudarte a encontrar ese juego que has estado buscando, para compartir consejos y estrategias, o simplemente para charlar sobre tus juegos favoritos. En POKEMAUS, nos comprometemos a ofrecerte una experiencia excepcional en cada visita.
          </p>

          <div className="bg-gray-50 p-8 md:p-12 text-center mt-12">
            <p className="text-lg font-medium text-gray-900 tracking-wide">
              ¡Únete a nosotros y adéntrate en un mundo de diversión y aventura!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
