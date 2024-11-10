import React from 'react';
import { ChevronRight, Zap, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
          alt="Electrical background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 pt-32 pb-16 sm:pt-48 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Vítejte ve světě <span className="text-blue-500">VoltSphere</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Inovativní elektroinstalace pro moderní domácnosti a podniky. Špičkové technologie, profesionální přístup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg flex items-center hover:bg-blue-600 transition-colors">
              Nezávazná konzultace
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors">
              Naše služby
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
              <Zap className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Moderní řešení</h3>
              <p className="text-gray-400">Využíváme nejnovější technologie a postupy</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
              <Shield className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Certifikovaná kvalita</h3>
              <p className="text-gray-400">Garantujeme bezpečnost a spolehlivost</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">24/7 Podpora</h3>
              <p className="text-gray-400">Jsme tu pro vás kdykoliv potřebujete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}