
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => window.open('https://wa.me/237674833400', '_blank')}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 animate-bounce-subtle group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
    </button>
  );
};

export default WhatsAppButton;
