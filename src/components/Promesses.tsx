
import React from 'react';
import { Palette, Zap, Headphones } from 'lucide-react';

const Promesses = () => {
  const promesses = [
    {
      icon: Palette,
      title: "Design sur-mesure",
      description: "Chaque site web est unique et reflète parfaitement votre identité de marque."
    },
    {
      icon: Zap,
      title: "Performance optimisée",
      description: "Sites rapides, SEO-friendly et optimisés pour tous les appareils."
    },
    {
      icon: Headphones,
      title: "Support réactif",
      description: "Assistance 24/7 et maintenance continue pour votre tranquillité d'esprit."
    }
  ];

  return (
    <section id="promesses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir EasyWeb ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à transformer votre vision digitale en réalité avec excellence et passion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promesses.map((promesse, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-red-50 hover:to-orange-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <promesse.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {promesse.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {promesse.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promesses;
