import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="WebBoost" className="footer-logo-image" />
            <span>WebBoost</span>
          </div>
          <div className="footer-links">
            <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')}>Soluções</a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfólio</a>
            <a href="#depoimentos" onClick={(e) => handleNavClick(e, '#depoimentos')}>Depoimentos</a>
            <a href="#precos" onClick={(e) => handleNavClick(e, '#precos')}>Preços</a>
            <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')}>Contato</a>
          </div>
        </div>
        <div className="footer-copy">
          © 2025 WebBoost. Todos os direitos reservados. | CNPJ: 00.000.000/0001-00
        </div>
      </div>
    </footer>
  );
};

export default Footer;
