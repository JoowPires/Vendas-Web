import React from 'react';
import './CTA.css';
import WhatsAppIcon from './icons/WhatsAppIcon';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Pronto para ter mais clientes?</h2>
          <p className="cta-subtitle">
            Comece agora e tenha seu site profissional no ar em até 7 dias. Sem complicação.
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/5511999999999?text=Olá! Quero um orçamento para meu site"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Falar no WhatsApp Agora
            </a>
            <a href="#contato" className="btn btn-secondary">
              Preencher Formulário
            </a>
          </div>
          <div className="cta-guarantee">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9,12 11,14 15,10"/>
            </svg>
            <span>Satisfação garantida ou seu dinheiro de volta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
