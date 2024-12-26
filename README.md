# Projeto de Testes Cypress e Cucumber

Este projeto utiliza o Cypress com a integração do Cucumber para realizar testes end-to-end (E2E) em uma aplicação web. 

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente é instalado junto com o Node.js)


## Dependências

Este projeto utiliza as seguintes dependências:

- **Cypress**: Framework de teste E2E.
- **@badeball/cypress-cucumber-preprocessor**: Integração do Cucumber com o Cypress.
- **@bahmutov/cypress-esbuild-preprocessor**: Suporte ao pré-processamento com Esbuild.

Você pode verificar as versões específicas no arquivo `package.json`.


## Configuração do Projeto

1. **Clone o repositório**

   Clone este repositório em sua máquina local:

   git clone https://github.com/Mateusline6/Teste-Cypress-com-Cucumber-BDD-e-API
   
2. **Instale as dependências**

    npm install


3. **Após a instalação**

    Antes de executar o projeto a no arquivo cypress.config.js para configurar o usuario e senha que deseja logar.

    USERNAME=seu_email@example.com
    PASSWORD=sua_senha

4. **Execute o projeto**

    execute o script npm cy:open
