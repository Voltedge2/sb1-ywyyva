import React from 'react';
import { Zap, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-white font-bold text-xl">VoltSphere</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Služby</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projekty</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reference</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Ceník</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Kontakt</a>
              <a href="tel:+420777888999" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +420 777 888 999
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}