import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prêt à lancer votre projet ? Parlons-en ensemble !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre projet en quelques mots..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp Priority */}
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border-0">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Réponse immédiate sur WhatsApp
                </h3>
                <p className="mb-6 opacity-90">
                  Pour une réponse rapide, contactez-nous directement via WhatsApp
                </p>
                <Button 
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://wa.me/237674833400', '_blank')}
                >
                  +237 674 833 400
                </Button>
              </CardContent>
            </Card>

            {/* Other Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@easyweb.cm</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Localisation</h4>
                  <p className="text-gray-600">Douala, Cameroun</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-white shadow-md border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Heures d'ouverture</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h00 - 15h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
