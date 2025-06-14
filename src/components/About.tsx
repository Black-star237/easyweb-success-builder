
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
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
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              À propos d'EasyWeb
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              EasyWeb est née de la passion de démocratiser l'accès au digital en Afrique. 
              Nous croyons que chaque entreprise, quelle que soit sa taille, mérite une présence 
              en ligne professionnelle et efficace.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre mission est de transformer vos idées en solutions web performantes qui 
              vous aident à atteindre vos objectifs business et à vous démarquer de la concurrence.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-tr from-red-100 to-orange-100 rounded-3xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Équipe EasyWeb au travail"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className="bg-white rounded-3xl p-8 mb-20 shadow-lg">
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
                Boris Frank
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
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
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
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Méthodologie
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un process éprouvé en 4 étapes pour garantir votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
                
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-red-200 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
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
