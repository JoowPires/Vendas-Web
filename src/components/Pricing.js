import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Landing Page',
    description: 'Ideal para campanhas e captação de leads',
    price: 'a partir de 197',
    pricePrefix: 'R$ ',
    featured: false,
    features: [
      '1 página de alta conversão',
      'Design profissional personalizado',
      'Integração WhatsApp',
      'Formulário de contato',
      'Responsivo (celular e desktop)',
      'Otimizado para anúncios',
      'Entrega em até 7 dias'
    ]
  },
  {
    name: 'Site Completo',
    description: 'Para quem quer presença digital profissional',
    price: 'A combinar',
    pricePrefix: '',
    featured: true,
    features: [
      'Até 5 páginas personalizadas',
      'Design exclusivo para sua marca',
      'Integração WhatsApp + formulário',
      'Galeria de serviços/produtos',
      'Google Maps integrado',
      'Otimização SEO básica',
      'Hospedagem 1 ano grátis',
      'Entrega em até 10 dias'
    ]
  }
];

const Pricing = () => {
  return (
    <section className="pricing" id="precos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Investimento</span>
          <h2 className="section-title">
            Planos que cabem no seu <span className="accent-text">bolso</span>
          </h2>
          <p className="section-subtitle">Escolha a opção ideal para o momento do seu negócio</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={index}>
              {plan.featured && <div className="pricing-badge">Mais Popular</div>}
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-desc">{plan.description}</p>
                <div className="pricing-price">
                  {plan.pricePrefix && <span className="pricing-currency">{plan.pricePrefix}</span>}
                  <span className="pricing-value">{plan.price}</span>
                </div>
                {plan.pricePrefix && <span className="pricing-period">pagamento único</span>}
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o plano ${plan.name}`}
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero esse plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
