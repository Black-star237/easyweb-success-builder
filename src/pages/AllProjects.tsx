
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const [filter, setFilter] = useState('all');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, delay: 150 });

  const allProjects = [
    {
      id: 1,
      title: "Restaurant Le Savoureux",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Site vitrine moderne pour restaurant avec menu en ligne",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://restaurant-demo.example.com"
    },
    {
      id: 2,
      title: "Boutique Mode Afrique",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      description: "E-commerce de vêtements africains avec paiement mobile",
      tech: ["Next.js", "Stripe", "MongoDB"],
      liveUrl: "https://boutique-afrique.example.com"
    },
    {
      id: 3,
      title: "Cabinet Médical",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Site professionnel avec prise de rendez-vous en ligne",
      tech: ["Vue.js", "Node.js", "MySQL"],
      liveUrl: "https://cabinet-medical.example.com"
    },
    {
      id: 4,
      title: "Marketplace Locale",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Plateforme de vente entre particuliers",
      tech: ["React", "Firebase", "PayPal"],
      liveUrl: "https://marketplace-local.example.com"
    },
    {
      id: 5,
      title: "École Primaire Saint-Paul",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1",
      description: "Site web pour école avec espace parents et élèves",
      tech: ["WordPress", "PHP", "MySQL"],
      liveUrl: "https://ecole-saint-paul.example.com"
    },
    {
      id: 6,
      title: "Pharmacie Central Plus",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      description: "E-commerce pharmaceutique avec livraison à domicile",
      tech: ["Shopify", "React", "Stripe"],
      liveUrl: "https://pharmacie-central.example.com"
    },
    {
      id: 7,
      title: "Garage Auto Expert",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3",
      description: "Site vitrine pour garage automobile avec prise de RDV",
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://garage-auto-expert.example.com"
    },
    {
      id: 8,
      title: "Immobilier Douala Premium",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      description: "Plateforme immobilière avec recherche avancée",
      tech: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "https://immobilier-douala.example.com"
    }
  ];

  const categories = [
    { key: 'all', label: 'Tous' },
    { key: 'vitrine', label: 'Vitrine' },
    { key: 'ecommerce', label: 'E-commerce' }
  ];

  const filteredProjects = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);
  const { ref: projectsRef, visibleItems } = useStaggeredAnimation(filteredProjects.length, 100);

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec navigation retour */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 font-medium transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
          
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tous nos Projets
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Découvrez l'ensemble de nos réalisations web, des sites vitrines aux plateformes e-commerce
            </p>
          </div>
        </div>
      </div>

      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-4">
          {/* Filter buttons */}
          <div className={`flex justify-center gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0 translate-y-8'
          }`}>
            {categories.map((category, index) => (
              <Button
                key={category.key}
                variant={filter === category.key ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  filter === category.key 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                } ${isVisible ? `animate-spring-in stagger-${index + 2}` : 'opacity-0'}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsRef}>
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-white border-0 shadow-md ${
                  visibleItems[index]
                    ? 'animate-flip-in' 
                    : 'opacity-0 -rotate-y-90'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button 
                        className="bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Voir le site
                      </Button>
                      <Button 
                        className="bg-red-600 text-white hover:bg-red-700 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
                        onClick={() => window.open('https://wa.me/237674833400', '_blank')}
                      >
                        Commander
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full font-medium transform transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white flex-1 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Voir le site
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
