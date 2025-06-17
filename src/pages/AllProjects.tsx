import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { useStructuredData } from '@/hooks/useStructuredData';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useProjects } from '@/hooks/useProjects';
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const [filter, setFilter] = useState('all');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, delay: 150 });
  const { data: allProjects = [], isLoading, error } = useProjects();
  const { getBreadcrumbData } = useStructuredData();

  console.log('AllProjects - Projects loaded:', allProjects);

  const breadcrumbData = getBreadcrumbData([
    { name: 'Accueil', url: 'https://easyweb.eswb.site' },
    { name: 'Tous nos Projets', url: 'https://easyweb.eswb.site/projets' }
  ]);

  const categories = [
    { key: 'all', label: 'Tous' },
    { key: 'vitrine', label: 'Vitrine' },
    { key: 'ecommerce', label: 'E-commerce' }
  ];

  const filteredProjects = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);
  const { ref: projectsRef, visibleItems } = useStaggeredAnimation(filteredProjects.length, 100);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Chargement des projets - EasyWeb"
          description="Chargement de nos réalisations web..."
        />
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 font-medium transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>
            
            <div className="text-center">
              <Loader2 className="mx-auto h-8 w-8 animate-spin text-red-600" />
              <p className="mt-4 text-gray-600">Chargement des projets...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Erreur - EasyWeb"
          description="Erreur lors du chargement des projets."
        />
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 font-medium transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>
            
            <div className="text-center">
              <p className="text-red-600">Erreur lors du chargement des projets.</p>
              <p className="text-gray-600 mt-2">Veuillez réessayer plus tard.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Tous nos Projets - Portfolio EasyWeb | Sites web réalisés au Cameroun"
        description="Découvrez notre portfolio complet : sites vitrine, e-commerce et applications web réalisés au Cameroun. Plus de 20 projets livrés avec succès."
        keywords="portfolio web Cameroun, réalisations sites internet, projets web Yaoundé, exemples sites e-commerce"
        url="/projets"
        type="website"
        structuredData={breadcrumbData}
      />

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
                  <OptimizedImage
                    src={project.image_url}
                    alt={`Projet ${project.title} - Site web réalisé par EasyWeb`}
                    className="w-full h-48 transition-all duration-500 group-hover:scale-125 group-hover:rotate-2"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button 
                        className="bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
                        onClick={() => window.open(project.live_url, '_blank')}
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
                      onClick={() => window.open(project.live_url, '_blank')}
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
