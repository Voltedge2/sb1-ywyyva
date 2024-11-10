import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jan Novák',
    role: 'Majitel rodinného domu',
    content: 'Profesionální přístup pana Erlicha předčil naše očekávání. Instalace chytré domácnosti proběhla rychle a bezproblémově.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Marie Svobodová',
    role: 'Manažerka hotelu',
    content: 'Oceňujeme rychlost a kvalitu práce. Rekonstrukce elektroinstalace v našem hotelu proběhla bez narušení provozu.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'Petr Dvořák',
    role: 'Ředitel výrobní společnosti',
    content: 'Díky modernizaci osvětlení a elektroinstalace jsme snížili náklady na energie o 40%. Skvělá investice!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Co o nás říkají klienti</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Spokojenost našich klientů je pro nás nejlepší vizitkou.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-500 opacity-50" />
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}