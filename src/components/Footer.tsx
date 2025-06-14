
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/e326e6f8-eb14-4e87-a39d-52531111fe9b.png" 
                alt="EasyWeb Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              EasyWeb transforme vos idées en sites web professionnels. 
              Votre partenaire digital de confiance au Cameroun.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <span className="font-semibold">WhatsApp:</span>
              <a 
                href="https://wa.me/237674833400" 
                className="hover:text-white transition-colors duration-300"
              >
                +237 674 833 400
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-400 hover:text-white transition-colors duration-300">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 EasyWeb. Tous droits réservés.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
