import React from 'react';
import './Solutions.css';

const solutions = [
  {
    icon: '🎯',
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas focadas em uma única ação: fazer o visitante entrar em contato com você.',
    features: [
      'Design profissional e moderno',
      'Botão direto para WhatsApp',
      'Otimizada para anúncios',
      'Carregamento ultra-rápido'
    ]
  },
  {
    icon: '🌐',
    title: 'Sites Institucionais Completos',
    description: 'Apresente seu negócio com credibilidade e profissionalismo em todas as páginas.',
    features: [
      'Múltiplas páginas organizadas',
      'Galeria de serviços/produtos',
      'Integração com Google Maps',
      'Formulário de contato'
    ]
  },
  {
    icon: '📱',
    title: '100% Responsivo',
    description: 'Seu site perfeito em qualquer dispositivo: celular, tablet ou computador.',
    features: [
      'Design mobile-first',
      'Navegação intuitiva',
      'Velocidade otimizada',
      'Experiência fluida'
    ]
  }
];

const Solutions = () => {
  return (
    <section className="solutions" id="solucoes">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Nossas Soluções</span>
          <h2 className="section-title">
            Tudo que você precisa para <span className="accent-text">vender mais</span>
          </h2>
          <p className="section-subtitle">
            Sites e landing pages criados estrategicamente para converter visitantes em clientes
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
