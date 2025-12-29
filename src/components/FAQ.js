import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Quanto tempo leva para o site ficar pronto?',
    answer: 'Landing pages ficam prontas em até 7 dias. Sites completos em até 10 dias úteis. Sempre respeitamos os prazos combinados.'
  },
  {
    question: 'Preciso pagar hospedagem?',
    answer: 'No plano Site Completo, o primeiro ano de hospedagem está incluso. Após esse período, o valor é de apenas R$ 49/mês.'
  },
  {
    question: 'Posso parcelar o pagamento?',
    answer: 'Sim! Aceitamos cartão de crédito em até 12x. Também fazemos Pix com desconto especial.'
  },
  {
    question: 'Vocês fazem manutenção do site?',
    answer: 'Sim, oferecemos planos de manutenção mensal que incluem atualizações, backup e pequenas alterações. Consulte valores.'
  },
  {
    question: 'E se eu não gostar do resultado?',
    answer: 'Oferecemos até 3 rodadas de revisões incluídas no projeto. Nosso objetivo é sua total satisfação.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Dúvidas Frequentes</span>
          <h2 className="section-title">
            Perguntas <span className="accent-text">comuns</span>
          </h2>
        </div>
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
