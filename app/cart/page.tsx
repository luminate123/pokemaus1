"use client";

import { useCart } from '@/components/CartProvider';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const categoryNames: Record<string, string> = {
    'box': 'Caja',
    'combo': 'Combo',
    'mystery-box': 'Caja Misteriosa',
    'single': 'Carta Individual'
  };

  const handleCheckout = () => {
    const phoneNumber = "51987654321"; // Reemplazar con el número de WhatsApp real
    
    let message = "Hola, quiero realizar el siguiente pedido:\n\n";
    
    items.forEach(item => {
      message += `• ${item.name} (x${item.quantity}) - S/. ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n*Total: S/. ${cartTotal.toFixed(2)}*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Tu Carrito está Vacío</h1>
          <p className="text-gray-500 mb-8">Parece que aún no has agregado cartas Pokémon.</p>
          <Link 
            href="/shop" 
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium uppercase tracking-widest text-white bg-black hover:bg-gray-800 transition-colors"
          >
            Empezar a Comprar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Carrito de Compras</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1">
            <ul className="divide-y divide-gray-100 border-t border-b border-gray-100">
              {items.map((item) => (
                <li key={item.id} className="py-8 flex flex-col sm:flex-row items-center gap-8">
                  <div className="relative w-24 h-24 shrink-0 bg-gray-50 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      <Link href={`/product/${item.id}`} className="hover:text-gray-600 transition-colors">
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{categoryNames[item.category] || item.category}</p>
                    <p className="text-lg font-medium text-gray-900">S/. {item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-500 hover:text-black transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-500 hover:text-black transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-black transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="py-6 flex justify-between items-center">
              <button 
                onClick={clearCart}
                className="text-sm text-gray-500 hover:text-black font-medium transition-colors"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-gray-50 p-8 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6 tracking-tight">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>S/. {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Envío</span>
                  <span>Calculado al pagar</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>S/. {cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full py-4 px-4 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Proceder al Pago <ArrowRight size={16} />
              </button>
              
              <p className="mt-6 text-xs text-center text-gray-400">
                Pago Seguro. Satisfacción Garantizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
