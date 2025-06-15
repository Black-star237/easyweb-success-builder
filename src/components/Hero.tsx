
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
              EasyWeb transforme vos 
              <span className="text-red-600 block animate-slide-in-left stagger-1">idées en sites</span>
              <span className="animate-slide-in-right stagger-2">qui cartonnent</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up stagger-2">
              Création de sites web professionnels, e-commerce et applications sur mesure. 
              Faites confiance à notre expertise pour propulser votre présence digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir nos réalisations
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open('https://wa.me/237674833400', '_blank')}
              >
                Parlez-nous sur WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 animate-fade-in-up stagger-4">
              <div className="text-center transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-red-600 animate-scale-in stagger-4">20+</div>
                <div className="text-gray-600">Sites livrés</div>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-red-600 animate-scale-in stagger-5">100%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-red-600 animate-scale-in stagger-6">24h</div>
                <div className="text-gray-600">Support réactif</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="bg-gradient-to-tr from-red-100 to-orange-100 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <img 
                src="https://xtbceoemzdauoiytxwzd.supabase.co/storage/v1/object/public/bastringue//immg.png"
                alt="Développement web professionnel"
                className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg animate-float">
              <div className="text-sm font-semibold">+10% ce mois</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-fade-in stagger-6">
          <button 
            onClick={() => document.getElementById('promesses')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce-subtle text-gray-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
