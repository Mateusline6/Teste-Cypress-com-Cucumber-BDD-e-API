import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = Cypress.env('trelloBaseUrl');

Given('eu envio um GET para a API', () => {
    cy.request({
        method: 'GET',
        url: baseUrl,
      }).as('responseData')
  })

  When("o status code deve ser 200", () => {
    
    cy.get('@responseData').then((response) => {
        expect(response.status).to.eq(200);
      })
  
})
  
  Then("o campo {string} da estrutura {string} deve ser exibido", (name, list) => {
   
    cy.get('@responseData').then((response) => {
    const valor = response.body.data[list][name];
    cy.log(`O campo "${name}" dentro de "${list}" é: ${valor}`);
    expect(valor).to.exist;
  });
   
  })