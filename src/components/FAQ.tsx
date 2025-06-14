
import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FAQ = () => {
  const faqData = [
    {
      question: "Quel est le délai de réalisation d'un site web ?",
      answer: "Le délai varie selon la complexité du projet. Un site vitrine standard prend 1-2 semaines, tandis qu'un e-commerce peut nécessiter 3-4 semaines. Nous vous donnons un planning précis dès le début du projet."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs démarrent à 150 000 FCFA pour un site vitrine et 300 000 FCFA pour un e-commerce. Le prix final dépend de vos besoins spécifiques. Contactez-nous pour un devis personnalisé gratuit."
    },
    {
      question: "Proposez-vous la maintenance après livraison ?",
      answer: "Oui, nous offrons des services de maintenance incluant les mises à jour, sauvegardes, optimisation SEO et support technique à partir de 25 000 FCFA/mois."
    },
    {
      question: "Mon site sera-t-il responsive (mobile-friendly) ?",
      answer: "Absolument ! Tous nos sites sont conçus pour s'adapter parfaitement à tous les écrans : ordinateurs, tablettes et smartphones. C'est inclus dans tous nos forfaits."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      answer: "Nous offrons jusqu'à 3 révisions incluses dans le prix. Si vous n'êtes toujours pas satisfait, nous vous remboursons intégralement. Votre satisfaction est notre priorité."
    },
    {
      question: "Puis-je modifier le contenu de mon site moi-même ?",
      answer: "Oui, nous pouvons intégrer un système de gestion de contenu (CMS) qui vous permet de modifier facilement textes, images et pages. Nous vous formons à son utilisation."
    },
    {
      question: "Incluez-vous l'hébergement et le nom de domaine ?",
      answer: "Nous pouvons nous occuper de l'hébergement et du nom de domaine selon vos préférences. Les coûts d'hébergement sont séparés et varient selon vos besoins de performance."
    },
    {
      question: "Comment se déroule le processus de paiement ?",
      answer: "Nous demandons un acompte de 50% au démarrage du projet et le solde à la livraison. Nous acceptons les virements bancaires, Mobile Money et PayPal."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus courantes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Card className="max-w-2xl mx-auto mt-16 bg-gradient-to-r from-red-50 to-orange-50 border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Votre question n'est pas là ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              N'hésitez pas à nous contacter directement sur WhatsApp. 
              Nous répondons généralement en moins de 2 heures !
            </p>
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/237674833400', '_blank')}
            >
              Poser votre question sur WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
