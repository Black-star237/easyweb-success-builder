import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Heart, Lightbulb } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, delay: 100 });
  const { ref: valuesRef, visibleItems: valuesVisible } = useStaggeredAnimation(3, 120);
  const { ref: methodologyRef, visibleItems: methodologyVisible } = useStaggeredAnimation(4, 100);

  const values = [
    {
      icon: CheckCircle,
      title: "Qualité",
      description: "Nous livrons des sites web de haute qualité qui respectent les standards internationaux"
    },
    {
      icon: Heart,
      title: "Transparence",
      description: "Communication claire et honnête tout au long de votre projet"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous utilisons les dernières technologies pour créer des solutions modernes"
    }
  ];

  const methodology = [
    { step: "1", title: "Brief", description: "Nous écoutons vos besoins et définissons ensemble vos objectifs" },
    { step: "2", title: "Prototype", description: "Création d'une maquette interactive pour visualiser le projet" },
    { step: "3", title: "Développement", description: "Codage professionnel avec tests réguliers" },
    { step: "4", title: "Livraison", description: "Mise en ligne et formation à l'utilisation" }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <div className="space-y-6">
            <h2 className={`text-4xl font-bold text-gray-900 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
            }`}>
              À propos d'EasyWeb
            </h2>
            <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${
              isVisible ? 'animate-fade-in stagger-1' : 'opacity-0'
            }`}>
              EasyWeb est née de la passion de démocratiser l'accès au digital en Afrique. 
              Nous croyons que chaque entreprise, quelle que soit sa taille, mérite une présence 
              en ligne professionnelle et efficace.
            </p>
            <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${
              isVisible ? 'animate-fade-in stagger-2' : 'opacity-0'
            }`}>
              Notre mission est de transformer vos idées en solutions web performantes qui 
              vous aident à atteindre vos objectifs business et à vous démarquer de la concurrence.
            </p>
          </div>
          
          <div className={`relative transition-all duration-800 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-tr from-red-100 to-orange-100 rounded-3xl p-8">
              <img 
                src="https://xtbceoemzdauoiytxwzd.supabase.co/storage/v1/object/public/bastringue//screenshot.png"
                alt="Équipe EasyWeb au travail"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className={`bg-white rounded-3xl p-8 mb-20 shadow-lg transition-all duration-1000 ${
          isVisible ? 'animate-zoom-in stagger-3' : 'opacity-0 scale-90'
        }`}>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="w-48 h-48 bg-gradient-to-br from-red-100 to-orange-100 rounded-full mx-auto flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600">BF</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Boris MANGA
              </h3>
              <p className="text-xl text-red-600 font-semibold">
                Fondateur & Développeur Principal
              </p>
              <p className="text-gray-600 leading-relaxed">
                Jeune entrepreneur passionné par les nouvelles technologies, Boris a fondé EasyWeb 
                avec la vision de rendre le web accessible à tous. Fort de plusieurs années d'expérience 
                en développement web, il accompagne personnellement chaque client dans la réalisation 
                de ses projets digitaux.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" ref={valuesRef}>
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                  valuesVisible[index] ? 'animate-spring-in' : 'opacity-0 translate-y-8 scale-90'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div>
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up stagger-5' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Méthodologie
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un process éprouvé en 4 étapes pour garantir votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8" ref={methodologyRef}>
            {methodology.map((step, index) => (
              <div 
                key={index} 
                className={`text-center relative transition-all duration-700 ${
                  methodologyVisible[index] ? 'animate-fade-in-up' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-2xl font-bold mb-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
                
                {index < methodology.length - 1 && (
                  <div className={`hidden md:block absolute top-8 left-full w-full h-px bg-red-200 transform -translate-x-1/2 transition-all duration-500 ${
                    methodologyVisible[index] ? 'animate-slide-in-right' : 'opacity-0'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up stagger-8' : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-float"
            onClick={() => window.open('https://wa.me/237674833400', '_blank')}
          >
            Discutons de votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
