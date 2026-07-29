# 🎭 Automação de Testes - SauceDemo com Playwright

Projeto de automação de testes End-to-End (ponta a ponta) desenvolvido para validar o fluxo principal de compras do e-commerce [SauceDemo](https://www.saucedemo.com/).

Este projeto foi desenvolvido como parte do desafio prático da **Mentoria de Automação de Testes com o Charlan**, com o objetivo de aplicar conceitos de arquitetura de código, boas práticas de QA e execução automatizada.

---

## 🚀 Sobre o Projeto

O objetivo principal deste projeto é automatizar o fluxo completo de compra, garantindo a integridade e regressão das principais funcionalidades da aplicação:
1. Autenticação/Login com usuário padrão.
2. Navegação na vitrine e adição de produtos ao carrinho.
3. Fluxo de Checkout (preenchimento dos dados e confirmação da compra).
4. Validação da mensagem de sucesso.

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Playwright](https://playwright.dev/)
- **Arquitetura:** Page Object Model (POM)
- **Gerenciador de Pacotes:** Yarn

---

## 🏗️ Arquitetura e Padrão POM

Para garantir modularidade, reusabilidade e facilidade de manutenção do código, foi adotado o padrão **Page Object Model (POM)**. Cada página do sistema possui uma classe dedicada no diretório `pages/`, responsável por mapear os elementos e encapsular as ações daquela tela.

### 📂 Estrutura de Pastas

```text
├── pages/
│   ├── loginPage.js       # Mapeamento e ações da tela de Login
│   ├── productPage.js     # Mapeamento e ações da vitrine de produtos
│   └── cartPage.js        # Mapeamento e ações do carrinho e checkout
├── tests/
│   └── ecommerce.spec.js  # Cenários de testes automatizados E2E
├── .gitignore             # Arquivos ignorados pelo Git
├── playwright.config.js   # Configurações globais do Playwright (Headless, Trace)
└── package.json           # Dependências e scripts do projeto