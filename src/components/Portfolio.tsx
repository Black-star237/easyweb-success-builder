
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useHomepageProjects } from '@/hooks/useProjects';
import { ExternalLink, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, delay: 150 });
  const { data: projects = [], isLoading, error } = useHomepageProjects();

  console.log('Portfolio - Projects loaded:', projects);

  const categories = [
    { key: 'all', label: 'Tous' },
    { key: 'vitrine', label: 'Vitrine' },
    { key: 'ecommerce', label: 'E-commerce' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const { ref: projectsRef, visibleItems } = useStaggeredAnimation(filteredProjects.length, 100);

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-red-600" />
            <p className="mt-4 text-gray-600">Chargement des projets...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Erreur lors du chargement des projets.</p>
            <p className="text-gray-600 mt-2">Veuillez réessayer plus tard.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire
          </p>

          {/* Filter buttons */}
          <div className={`flex justify-center gap-4 mb-8 transition-all duration-1000 ${
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
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-2"
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

                <Button 
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white w-full rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open(project.live_url, '_blank')}
                >
                  <ExternalLink size={14} className="mr-2" />
                  Voir le site live
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up stagger-6' : 'opacity-0 translate-y-8'
        }`}>
          <Link to="/projets">
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-float"
            >
              Voir plus de projets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
