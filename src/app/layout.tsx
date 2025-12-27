import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/src/components/CartProvider";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://web-ktujc1odbjp1.up-de-fra1-k8s-1.apps.run-on-seenode.com/'), // TODO: Reemplaza con tu dominio real de Seenode
  title: {
    default: "Pokemon Center Perú | Tienda Pokémon TCG",
    template: "%s | Pokemon Center Perú"
  },
  description: "Tu destino definitivo para Pokémon TCG. Encuentra Cajas de Entrenador Élite, Boosters, Mystery Boxes y cartas sueltas al mejor precio.",
  keywords: ["Pokemon TCG", "Cartas Pokemon", "Pokemon Chile", "Booster Box", "Elite Trainer Box", "Mystery Box", "Pokemon Center Perú", "TCG Store"],
  authors: [{ name: "Pokemon Center Perú" }],
  creator: "Pokemon Center Perú",
  publisher: "Pokemon Center Perú",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Pokemon Center Perú | Tienda Pokémon TCG",
    description: "Tu destino definitivo para Pokémon TCG. Coleccionables, cajas y cartas sueltas para verdaderos entrenadores.",
    siteName: "Pokemon Center Perú",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Pokemon Center Perú Logo",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon Center Perú | Tienda Pokémon TCG",
    description: "Tu destino definitivo para Pokémon TCG. Coleccionables, cajas y cartas sueltas.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
          
          {/* WhatsApp Floating Button */}
          <a 
            href="https://wa.me/51999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="32" 
              height="32" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="fill-white stroke-white"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              ¡Chatea con nosotros!
            </span>
          </a>
        </CartProvider>
      </body>
    </html>
  );
}
