import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Phone mask
      let cleaned = value.replace(/\D/g, '');
      if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);
      
      let formatted = cleaned;
      if (cleaned.length > 0) {
        if (cleaned.length <= 2) {
          formatted = `(${cleaned}`;
        } else if (cleaned.length <= 7) {
          formatted = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
        } else {
          formatted = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
        }
      }
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Vim pelo site.%0A%0A*Nome:* ${formData.name}%0A*WhatsApp:* ${formData.phone}%0A*Tipo de negócio:* ${formData.business}%0A*Mensagem:* ${formData.message}`;
    
    window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>
              Vamos conversar sobre seu <span className="accent-text">projeto?</span>
            </h2>
            <p>
              Preencha o formulário ou entre em contato diretamente. Respondemos em até 2 horas em horário comercial.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">📱</div>
                <div className="contact-method-info">
                  <h4>WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      (11) 99999-9999
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">✉️</div>
                <div className="contact-method-info">
                  <h4>E-mail</h4>
                  <p>
                    <a href="mailto:contato@webpro.com.br">contato@webpro.com.br</a>
                  </p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">📍</div>
                <div className="contact-method-info">
                  <h4>Atendimento</h4>
                  <p>Seg a Sex, 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Seu nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Como podemos te chamar?"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">WhatsApp *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="business">Tipo de negócio *</label>
              <select
                id="business"
                name="business"
                required
                value={formData.business}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="Salão de Beleza">Salão de Beleza</option>
                <option value="Barbearia">Barbearia</option>
                <option value="Clínica / Estética">Clínica / Estética</option>
                <option value="Restaurante / Alimentação">Restaurante / Alimentação</option>
                <option value="Prestador de Serviços">Prestador de Serviços</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Conte mais sobre seu projeto</label>
              <textarea
                id="message"
                name="message"
                placeholder="O que você precisa? Já tem site? Qual seu objetivo principal?"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
