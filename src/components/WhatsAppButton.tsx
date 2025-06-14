
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => window.open('https://wa.me/237674833400', '_blank')}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;
