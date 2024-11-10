import React from 'react';
import { Check, HelpCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Základní servis',
    price: '650 Kč/hod',
    description: 'Pro jednorázové opravy a menší instalace',
    features: [
      'Výjezd do 24 hodin',
      'Základní diagnostika',
      'Drobné opravy',
      'Výměna zásuvek a vypínačů',
      'Instalace světel'
    ]
  },
  {
    name: 'Kompletní instalace',
    price: 'od 25000 Kč',
    description: 'Pro novostavby a rekonstrukce',
    features: [
      'Projektová dokumentace',
      'Kompletní elektroinstalace',
      'Revizní zpráva',
      'Smart home příprava',
      'Záruka 5 let'
    ],
    highlighted: true
  },
  {
    name: 'Firemní servis',
    price: 'od 1200 Kč/hod',
    description: 'Pro firmy a průmyslové objekty',
    features: [
      'Přednostní servis 24/7',
      'Pravidelné kontroly',
      'Průmyslové instalace',
      'Revize a dokumentace',
      'Servisní smlouva'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ceník služeb</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparentní cenová politika bez skrytých poplatků. Dominik Erlich - elektrikář, kterému můžete důvěřovat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-600 to-blue-800 transform scale-105'
                  : 'bg-gray-900'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-200' : 'text-gray-400'}`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 ${plan.highlighted ? 'text-blue-200' : 'text-blue-500'}`} />
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                Objednat konzultaci
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gray-900 rounded-full px-6 py-3">
            <HelpCircle className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-gray-300">Potřebujete poradit s výběrem? Zavolejte nám na +420 777 888 999</span>
          </div>
        </div>
      </div>
    </section>
  );
}