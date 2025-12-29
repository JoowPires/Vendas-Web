import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <a href="#" className="logo">
            <img src="/images/logo.png" alt="WebBoost" className="logo-image" />
            <span>WebBoost</span>
          </a>
          <nav className={menuOpen ? 'open' : ''}>
            <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')}>Soluções</a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfólio</a>
            <a href="#depoimentos" onClick={(e) => handleNavClick(e, '#depoimentos')}>Depoimentos</a>
            <a href="#precos" onClick={(e) => handleNavClick(e, '#precos')}>Preços</a>
            <a href="#contato" className="nav-cta" onClick={(e) => handleNavClick(e, '#contato')}>Orçamento Grátis</a>
          </nav>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
