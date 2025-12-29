import React from 'react';
import './Process.css';

const steps = [
  {
    number: 1,
    title: 'Briefing',
    description: 'Entendemos seu negócio, seus diferenciais e o que você precisa'
  },
  {
    number: 2,
    title: 'Design',
    description: 'Criamos o layout personalizado para sua marca e segmento'
  },
  {
    number: 3,
    title: 'Desenvolvimento',
    description: 'Construímos seu site com as melhores tecnologias'
  },
  {
    number: 4,
    title: 'Entrega',
    description: 'Seu site no ar, funcionando e gerando resultados'
  }
];

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Como Funciona</span>
          <h2 className="section-title">
            Seu site pronto em <span className="accent-text">7 dias</span>
          </h2>
          <p className="section-subtitle">Um processo simples e transparente do início ao fim</p>
        </div>
        <div className="process-steps">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
