import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

export default function EmergencyButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isExpanded && (
        <div className="absolute bottom-16 right-0 bg-red-600 text-white p-4 rounded-lg shadow-lg animate-fade-in">
          <h4 className="font-bold mb-2">24/7 Pohotovost</h4>
          <p className="mb-2">Řešíme urgentní případy ihned!</p>
          <a
            href="tel:+420777888999"
            className="block bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
          >
            +420 777 888 999
          </a>
        </div>
      )}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`p-4 rounded-full shadow-lg transition-all ${
          isExpanded ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {isExpanded ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Phone className="h-6 w-6 text-white animate-pulse" />
        )}
      </button>
    </div>
  );
}