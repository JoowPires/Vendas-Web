import React from 'react';
import './Hero.css';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-in">
              🚀 Especialistas em Negócios Locais
            </div>
            <h1 className="animate-in delay-1">
              Seu negócio merece um site que
              <span className="serif accent-text"> vende de verdade</span>
            </h1>
            <p className="hero-description animate-in delay-2">
              Criamos sites e landing pages profissionais que transformam visitantes em clientes. Perfeito para salões, clínicas, barbearias e negócios locais.
            </p>
            <div className="hero-ctas animate-in delay-3">
              <a 
                href="https://wa.me/5511999999999?text=Olá! Quero um orçamento para meu site" 
                className="btn btn-primary" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                Ver Portfólio
              </a>
            </div>
          </div>
          <div className="hero-visual animate-in delay-4">
            <div className="hero-mockup">
              <div className="mockup-header">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-content">
                <div className="mockup-site">
                  <div className="mockup-nav">
                    <div className="mockup-logo"></div>
                    <div className="mockup-menu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="mockup-hero">
                    <div className="mockup-hero-title"></div>
                    <div className="mockup-hero-text"></div>
                    <div className="mockup-hero-text short"></div>
                    <div className="mockup-hero-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-stats">
              <div className="stat-card">
                <div className="stat-value">+150%</div>
                <div className="stat-label">Mais Clientes</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">24h</div>
                <div className="stat-label">Online</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">5★</div>
                <div className="stat-label">Avaliações</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
