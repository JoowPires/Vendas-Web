import React from 'react';
import './SocialProof.css';

const proofItems = [
  { number: '100+', label: 'Sites Entregues' },
  { number: '50+', label: 'Clientes Satisfeitos' },
  { number: '4.9★', label: 'Nota no Google' },
  { number: '7 dias', label: 'Prazo de Entrega' },
];

const SocialProof = () => {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="proof-content">
          {proofItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="proof-item">
                <div className="proof-number">{item.number}</div>
                <div className="proof-label">{item.label}</div>
              </div>
              {index < proofItems.length - 1 && <div className="proof-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
