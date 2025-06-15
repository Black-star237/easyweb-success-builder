
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useHomepageProjects } from '@/hooks/useProjects';
import { ExternalLink, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CarouselApi } from '@/components/ui/carousel';

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, delay: 150 });
  const { data: projects = [], isLoading, error } = useHomepageProjects();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  console.log('Portfolio - Projects loaded:', projects);
  console.log('Portfolio - Loading state:', isLoading);
  console.log('Portfolio - Error state:', error);
  console.log('Portfolio - Projects count:', projects.length);
  console.log('Portfolio - isVisible:', isVisible);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api || projects.length === 0) return;

    const autoScroll = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [api, projects.length]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
    console.error('Portfolio error details:', error);
    return (
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Erreur lors du chargement des projets.</p>
            <p className="text-gray-600 mt-2">Détails: {error.message}</p>
            <p className="text-gray-600 mt-2">Veuillez réessayer plus tard.</p>
          </div>
        </div>
      </section>
    );
  }

  // Si aucun projet n'est disponible pour la homepage
  if (projects.length === 0) {
    return (
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Nos projets sont en cours de chargement...
            </p>
            <p className="text-gray-500 mb-8">
              Aucun projet configuré pour l'affichage sur la page d'accueil.
            </p>
            <Link to="/projets">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Voir tous nos projets
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire
          </p>
          <p className="text-sm text-gray-500">
            {projects.length} projet{projects.length > 1 ? 's' : ''} affiché{projects.length > 1 ? 's' : ''}
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => {
                console.log(`Rendering project ${index}:`, project);
                return (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-md">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                          onError={(e) => {
                            console.error('Image failed to load:', project.image_url);
                            e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Non+Disponible';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="flex gap-3">
                            <Button 
                              size="sm"
                              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
                              onClick={() => window.open(project.live_url, '_blank')}
                            >
                              <ExternalLink size={14} className="mr-1" />
                              Voir
                            </Button>
                            <Button 
                              size="sm"
                              className="bg-red-600 text-white hover:bg-red-700 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
                              onClick={() => window.open('https://wa.me/237674833400', '_blank')}
                            >
                              Commander
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tech.slice(0, 3).map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        <Button 
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-white w-full rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                          onClick={() => window.open(project.live_url, '_blank')}
                        >
                          <ExternalLink size={12} className="mr-1" />
                          Voir le site
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/90 hover:bg-white border-red-200 text-red-600 hover:text-red-700" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/90 hover:bg-white border-red-200 text-red-600 hover:text-red-700" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-red-600 w-6' : 'bg-red-200'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link to="/projets">
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-float"
            >
              Voir tous nos projets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
