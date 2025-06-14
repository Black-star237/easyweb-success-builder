
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <img 
              src="/lovable-uploads/e326e6f8-eb14-4e87-a39d-52531111fe9b.png" 
              alt="EasyWeb Logo" 
              className="h-8 w-auto transition-transform duration-300 hover:scale-110 hover:rotate-6"
            />
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-red-600">Easy</span>
              <span className="text-2xl font-bold text-red-600 transition-all duration-300 hover:scale-110">Web</span>
              <span className="text-xs text-gray-600 ml-1 align-top">™</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in stagger-1">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block animate-slide-in-right">
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://wa.me/237674833400', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-all duration-300 hover:scale-110 hover:bg-gray-100 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-fade-in-up">
            <nav className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 mt-4 transform hover:scale-105"
                onClick={() => {
                  window.open('https://wa.me/237674833400', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
