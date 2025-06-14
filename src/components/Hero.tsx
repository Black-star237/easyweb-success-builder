
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              EasyWeb transforme vos 
              <span className="text-red-600 block">idées en sites</span>
              qui cartonnent
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Création de sites web professionnels, e-commerce et applications sur mesure. 
              Faites confiance à notre expertise pour propulser votre présence digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir nos réalisations
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                onClick={() => window.open('https://wa.me/237674833400', '_blank')}
              >
                Parlez-nous sur WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">20+</div>
                <div className="text-gray-600">Sites livrés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24h</div>
                <div className="text-gray-600">Support réactif</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-tr from-red-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Développement web professionnel"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg animate-pulse">
              <div className="text-sm font-semibold">+10% ce mois</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => document.getElementById('promesses')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce text-gray-400 hover:text-red-600 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
