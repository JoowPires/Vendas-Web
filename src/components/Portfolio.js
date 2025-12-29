import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  {
    category: 'Salão de Beleza',
    title: 'Studio Bella Hair',
    description: 'Landing page completa com agendamento online integrado',
    result: '+85% agendamentos'
  },
  {
    category: 'Clínica de Estética',
    title: 'Clínica Renove',
    description: 'Site institucional com galeria de procedimentos',
    result: '+120% contatos'
  },
  {
    category: 'Barbearia',
    title: 'Barbearia Old School',
    description: 'Landing page para campanhas de Meta Ads',
    result: '+200% clientes novos'
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfólio</span>
          <h2 className="section-title">
            Projetos que <span className="accent-text">geram resultados</span>
          </h2>
          <p className="section-subtitle">Veja alguns dos sites que criamos para nossos clientes</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-image">
                <div className="portfolio-mockup">
                  <div className="portfolio-mockup-header">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="portfolio-mockup-body">
                    <div className="portfolio-mockup-line"></div>
                    <div className="portfolio-mockup-line short"></div>
                    <div className="portfolio-mockup-line accent"></div>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-result">📈 {item.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
