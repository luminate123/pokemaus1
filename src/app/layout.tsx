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
    default: "POKEMAUS | Tienda Pokémon TCG",
    template: "%s | POKEMAUS"
  },
  description: "Tu destino definitivo para Pokémon TCG. Encuentra Cajas de Entrenador Élite, Boosters, Mystery Boxes y cartas sueltas al mejor precio.",
  keywords: ["Pokemon TCG", "Cartas Pokemon", "Pokemon Chile", "Booster Box", "Elite Trainer Box", "Mystery Box", "Pokemaus", "TCG Store"],
  authors: [{ name: "POKEMAUS" }],
  creator: "POKEMAUS",
  publisher: "POKEMAUS",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "POKEMAUS | Tienda Pokémon TCG",
    description: "Tu destino definitivo para Pokémon TCG. Coleccionables, cajas y cartas sueltas para verdaderos entrenadores.",
    siteName: "POKEMAUS",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 800,
        alt: "POKEMAUS Logo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POKEMAUS | Tienda Pokémon TCG",
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
        </CartProvider>
      </body>
    </html>
  );
}
