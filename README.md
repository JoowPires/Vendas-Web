# Landing Page - Agência de Criação de Sites

Uma landing page profissional de alta conversão para freelancers e agências de criação de sites, focada em atrair e converter pequenos e médios negócios locais.

## 🚀 Tecnologias

- React 18
- CSS3 (com variáveis CSS)
- JavaScript ES6+

## 📁 Estrutura do Projeto

```
landing-page-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── WhatsAppIcon.js
│   │   ├── Header.js / Header.css
│   │   ├── Hero.js / Hero.css
│   │   ├── SocialProof.js / SocialProof.css
│   │   ├── Problems.js / Problems.css
│   │   ├── Solutions.js / Solutions.css
│   │   ├── Portfolio.js / Portfolio.css
│   │   ├── Process.js / Process.css
│   │   ├── Testimonials.js / Testimonials.css
│   │   ├── Pricing.js / Pricing.css
│   │   ├── FAQ.js / FAQ.css
│   │   ├── CTA.js / CTA.css
│   │   ├── Contact.js / Contact.css
│   │   ├── Footer.js / Footer.css
│   │   └── WhatsAppFloat.js / WhatsAppFloat.css
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Instalação

1. Extraia o arquivo ZIP
2. Navegue até a pasta do projeto:
   ```bash
   cd landing-page-react
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

## ⚙️ Personalização

### WhatsApp
Substitua o número `5511999999999` pelo seu número real em todos os componentes:
- `Hero.js`
- `Pricing.js`
- `CTA.js`
- `Contact.js`
- `WhatsAppFloat.js`

### Dados
Edite os arrays de dados nos componentes para personalizar:
- `SocialProof.js` - Números de prova social
- `Problems.js` - Problemas do público-alvo
- `Solutions.js` - Suas soluções
- `Portfolio.js` - Seus projetos
- `Process.js` - Etapas do processo
- `Testimonials.js` - Depoimentos
- `Pricing.js` - Preços e planos
- `FAQ.js` - Perguntas frequentes

### Cores
Edite as variáveis CSS em `src/styles/global.css`:
```css
:root {
  --accent: #00d4aa;        /* Cor principal */
  --bg-primary: #0a0a0f;    /* Fundo principal */
  --bg-secondary: #12121a;  /* Fundo secundário */
  /* ... */
}
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

## 📄 Licença

Este projeto é de uso livre para fins comerciais e pessoais.
