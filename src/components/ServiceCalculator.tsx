import React, { useState } from 'react';
import { Calculator, Plus, Minus } from 'lucide-react';

const services = {
  'Výměna zásuvky': 350,
  'Výměna vypínače': 350,
  'Instalace světla': 850,
  'Revize bytu': 2500,
  'Jištění okruhu': 1200,
  'Instalace ventilátoru': 950
};

export default function ServiceCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selections, setSelections] = useState<Record<string, number>>({});

  const total = Object.entries(selections).reduce(
    (sum, [service, count]) => sum + services[service as keyof typeof services] * count,
    0
  );

  const updateSelection = (service: string, increment: boolean) => {
    setSelections(prev => ({
      ...prev,
      [service]: Math.max(0, (prev[service] || 0) + (increment ? 1 : -1))
    }));
  };

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 max-w-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Kalkulátor služeb
          </h3>
          <div className="space-y-4">
            {Object.entries(services).map(([service, price]) => (
              <div key={service} className="flex items-center justify-between">
                <div>
                  <p className="text-gray-700 dark:text-gray-300">{service}</p>
                  <p className="text-sm text-gray-500">{price} Kč</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateSelection(service, false)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{selections[service] || 0}</span>
                  <button
                    onClick={() => updateSelection(service, true)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900 dark:text-white">Celkem:</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">{total} Kč</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all"
      >
        <Calculator className="h-6 w-6" />
      </button>
    </div>
  );
}