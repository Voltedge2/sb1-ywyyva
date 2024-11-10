import React from 'react';
import { Star, Users, Calendar } from 'lucide-react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80',
    title: 'Smart Villa Praha',
    description: 'Kompletní instalace chytré domácnosti včetně LED osvětlení a zabezpečení.',
    rating: 5,
    date: 'Leden 2024'
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    title: 'Výrobní Hala Mladá Boleslav',
    description: 'Průmyslová elektroinstalace s důrazem na bezpečnost a efektivitu.',
    rating: 5,
    date: 'Březen 2024'
  },
  {
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80',
    title: 'Bytový Komplex Brno',
    description: 'Elektroinstalace pro 45 bytových jednotek včetně společných prostor.',
    rating: 5,
    date: 'Únor 2024'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Naše realizace</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Prohlédněte si naše nedávné projekty a přesvědčte se o kvalitě naší práce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Zobrazit více projektů
          </button>
        </div>
      </div>
    </section>
  );
}