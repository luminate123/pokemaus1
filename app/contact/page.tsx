"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3 block">Soporte</span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">Contáctanos</h1>
          <p className="text-gray-500 font-light text-lg">¿Tienes alguna pregunta? Nos encantaría escucharte.</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">¡Mensaje Enviado!</h3>
              <p className="text-gray-500 mb-8">Gracias por contactarnos. Te responderemos a la brevedad.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-sm font-medium text-black underline hover:text-gray-600 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Asunto</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors text-gray-600"
                >
                  <option>Consulta General</option>
                  <option>Estado del Pedido</option>
                  <option>Pregunta sobre Producto</option>
                  <option>Devoluciones / Cambios</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Mensaje</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
