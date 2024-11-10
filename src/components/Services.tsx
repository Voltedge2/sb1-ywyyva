import React from 'react';
import { Lightbulb, Home, Building2, Shield, Wrench, Zap, Calculator } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Domácí elektroinstalace',
    description: 'Kompletní elektroinstalace pro novostavby i rekonstrukce bytů a rodinných domů.',
    price: 'od 850 Kč/hod'
  },
  {
    icon: Building2,
    title: 'Průmyslové instalace',
    description: 'Specializované řešení pro výrobní haly, sklady a komerční prostory.',
    price: 'od 1200 Kč/hod'
  },
  {
    icon: Lightbulb,
    title: 'Inteligentní osvětlení',
    description: 'Návrh a instalace chytrého LED osvětlení s možností ovládání přes telefon.',
    price: 'od 15000 Kč'
  },
  {
    icon: Shield,
    title: 'Revize a kontroly',
    description: 'Pravidelné kontroly a revizní zprávy pro pojišťovny a kolaudace.',
    price: 'od 2500 Kč'
  },
  {
    icon: Wrench,
    title: 'Opravy a údržba',
    description: 'Rychlý servis a opravy elektrických zařízení a rozvodů.',
    price: 'od 650 Kč/hod'
  },
  {
    icon: Zap,
    title: 'Smart Home řešení',
    description: 'Instalace a nastavení chytré domácnosti na míru.',
    price: 'od 25000 Kč'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Naše služby</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nabízíme komplexní elektrikářské služby pod vedením Dominika Erlicha s důrazem na kvalitu a profesionalitu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <service.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-blue-400 font-semibold">{service.price}</span>
                <button className="flex items-center text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Calculator className="h-4 w-4 mr-2" />
                  Kalkulace
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Potřebujete individuální řešení?</h3>
          <p className="text-blue-100 mb-6">
            Každý projekt je jedinečný. Kontaktujte nás pro nezávaznou konzultaci a kalkulaci na míru.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+420777888999" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Zavolejte nám
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Poslat poptávku
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}