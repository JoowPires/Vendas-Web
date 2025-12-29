import React from 'react';
import './Problems.css';

const problems = [
  {
    icon: '😰',
    title: 'Sem presença digital',
    description: 'Clientes pesquisam online antes de escolher. Sem um site, você simplesmente não existe para eles.'
  },
  {
    icon: '📉',
    title: 'Perdendo para concorrentes',
    description: 'Enquanto você depende do boca a boca, seus concorrentes captam clientes 24 horas por dia.'
  },
  {
    icon: '🤷',
    title: 'Site antigo ou amador',
    description: 'Um site desatualizado passa impressão de descuido e afasta clientes potenciais.'
  },
  {
    icon: '💸',
    title: 'Anúncios sem resultado',
    description: 'Gasta dinheiro com anúncios mas não converte porque não tem uma página profissional.'
  }
];

const Problems = () => {
  return (
    <section className="problems">
      <div className="container">
        <div className="section-header">
          <span className="section-label">O Problema</span>
          <h2 className="section-title">Você está perdendo clientes todos os dias</h2>
          <p className="section-subtitle">Enquanto seus concorrentes vendem online, você está ficando para trás</p>
        </div>
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div className="problem-card" key={index}>
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
