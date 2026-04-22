# Casagrande Aquecimentos - Landing Page

> **Climatização de Alto Padrão na Serra Gaúcha.** Soluções definitivas e inteligentes em calefação, piso aquecido e bombas de calor para residências, hotéis e hospitais.

Esta é a landing page oficial da Casagrande Aquecimentos, desenvolvida para destacar os serviços premium de climatização e aquecimento focados na região da Serra Gaúcha (Caxias do Sul e arredores). O site tem foco na conversão de orçamentos e apresentação de projetos de alto padrão através de uma interface moderna, clean e com alta responsividade.

## 🚀 Tecnologias Utilizadas

O projeto foi inicializado utilizando o template do [Vite](https://vitejs.dev/) com React, visando alta performance no desenvolvimento e otimização de build:

- **React (v19)**: Biblioteca base para a construção das interfaces, garantindo reatividade e componentização modular.
- **Vite**: Bundler ultra rápido para o ambiente de desenvolvimento.
- **Tailwind CSS (v4)**: Framework de CSS utilitário para estilização rápida, responsiva e alinhada às melhores práticas de design de interfaces modernas.
- **ESLint**: Garantia de consistência no código fonte e prevenção de erros durante o desenvolvimento (configuração atualizada v9).

## ✨ Funcionalidades Principais

- **Design Premium**: Otimizado para transmitir confiança e qualidade, atributos fundamentais para os sistemas de aquecimento e climatização de alto padrão da Casagrande.
- **Formulários de Orçamento**: Estrutura voltada para captação de leads interessados nos serviços (piso aquecido, radiadores, bombas de calor).
- **SEO Ready**: Meta-tags (`og:title`, `og:description`, `keywords`) configuradas na raiz do documento para melhor indexação e ranqueamento (crucial para o nicho de serviços na Serra Gaúcha).
- **Responsividade**: Layout que se adapta perfeitamente em dispositivos móveis, tablets e telas maiores.

## 🛠️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o ambiente de desenvolvimento em sua máquina:

1. **Pré-requisitos**: [Node.js](https://nodejs.org/) instalado.
2. **Instalação das dependências**:
   No terminal, navegue até a raiz do projeto e instale as bibliotecas necessárias:
   ```bash
   npm install
   ```
3. **Iniciando o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a URL gerada no terminal (ex: `http://localhost:5173/`).
4. **Build para produção**:
   Para preparar os arquivos para o deploy (por exemplo, na Vercel):
   ```bash
   npm run build
   ```
   Isso compilará a aplicação na pasta `dist/`.

## 📁 Estrutura Básica do Projeto

```text
CASA-GRANDE/
├── public/              # Ícones, logo e outros arquivos estáticos não processados
├── src/
│   ├── components/      # Componentes reutilizáveis da interface
│   ├── main.jsx         # Ponto de entrada (entry point) do React
│   └── ...              # Demais lógicas e estilos globais
├── index.html           # Arquivo raiz HTML com configurações de SEO
├── package.json         # Dependências do projeto
├── vite.config.js       # Configuração do empacotador Vite
└── eslint.config.js     # Regras de linting do projeto
```
