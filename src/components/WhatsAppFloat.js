import React from 'react';
import './WhatsAppFloat.css';
import WhatsAppIcon from './icons/WhatsAppIcon';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Vim pelo site e quero um orçamento"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat no WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </a>
  );
};

export default WhatsAppFloat;
