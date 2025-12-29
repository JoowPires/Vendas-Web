import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: '"Antes eu dependia só de indicação. Agora meu WhatsApp não para! O site trouxe clientes que nunca teriam me encontrado."',
    author: 'Maria Fernanda',
    company: 'Studio Bella Hair • São Paulo',
    initials: 'MF'
  },
  {
    text: '"Investimento que se pagou no primeiro mês. A landing page convertendo demais com meus anúncios no Instagram."',
    author: 'Rafael Costa',
    company: 'Barbearia Old School • RJ',
    initials: 'RC'
  },
  {
    text: '"Profissionalismo do início ao fim. Entregaram antes do prazo e o resultado ficou melhor do que eu imaginava."',
    author: 'Ana Silva',
    company: 'Clínica Renove • BH',
    initials: 'AS'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title">
            O que nossos clientes <span className="accent-text">dizem</span>
          </h2>
          <p className="section-subtitle">Histórias reais de negócios que transformamos</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.initials}</div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
