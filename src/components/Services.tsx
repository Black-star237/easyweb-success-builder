
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, ShoppingCart, Search, RefreshCw } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: Monitor,
      title: "Site vitrine",
      description: "Présentez votre entreprise avec élégance et professionnalisme",
      features: ["Design responsive", "SEO optimisé", "Formulaire de contact", "Google Analytics"],
      originalPrice: "À partir de 150 000 FCFA",
      promotionalPrice: "À partir de 75 000 FCFA",
      isOnPromotion: true
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Vendez en ligne avec une boutique moderne et sécurisée",
      features: ["Catalogue produits", "Panier d'achat", "Paiement sécurisé", "Gestion commandes"],
      originalPrice: "À partir de 300 000 FCFA",
      promotionalPrice: "À partir de 150 000 FCFA",
      isOnPromotion: true
    },
    {
      icon: Search,
      title: "Maintenance & SEO",
      description: "Maintenez et optimisez votre présence en ligne",
      features: ["Mises à jour", "Sauvegarde", "Optimisation SEO", "Support technique"],
      price: "À partir de 25 000 FCFA/mois",
      isOnPromotion: false
    },
    {
      icon: RefreshCw,
      title: "Refonte de site",
      description: "Modernisez votre site existant avec les dernières technologies",
      features: ["Audit complet", "Nouveau design", "Migration données", "Formation"],
      originalPrice: "À partir de 200 000 FCFA",
      promotionalPrice: "À partir de 100 000 FCFA",
      isOnPromotion: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg font-bold animate-bounce-subtle">
              🔥 PROMOTION 2 SEMAINES
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions web complètes adaptées à vos besoins et votre budget
          </p>
          <p className="text-lg text-red-600 font-semibold mt-2">
            Profitez de -50% sur nos services jusqu'au 31 janvier !
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-white border-0 shadow-md group relative ${
                isVisible 
                  ? `animate-scale-in stagger-${index + 2}` 
                  : 'opacity-0 scale-90'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              {service.isOnPromotion && (
                <Badge className="absolute -top-2 -right-2 bg-red-600 text-white z-10 animate-pulse">
                  -50%
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 mx-auto group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <service.icon size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-4">
                    {service.isOnPromotion ? (
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-red-600 group-hover:scale-105 transition-transform duration-300">
                          {service.promotionalPrice}
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                          {service.originalPrice}
                        </div>
                      </div>
                    ) : (
                      <div className="text-lg font-bold text-red-600 group-hover:scale-105 transition-transform duration-300">
                        {service.price}
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    onClick={() => window.open('https://wa.me/237674833400', '_blank')}
                  >
                    {service.isOnPromotion ? 'Profiter de la promo' : 'Demander un devis'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up stagger-6' : 'opacity-0 translate-y-8'}`}>
          <Button 
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-float"
            onClick={() => window.open('https://wa.me/237674833400', '_blank')}
          >
            Discutons de votre projet sur WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
