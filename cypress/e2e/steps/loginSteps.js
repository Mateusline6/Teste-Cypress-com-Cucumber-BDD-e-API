import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import loginSelectors from '../page/loginPage'


Given('que o usuário acessa a página de login', () => {
  cy.visit(loginSelectors.loginPage);
})

When("ele insere o usuário e a senha", () => {
  cy.login()
});

Then("ele deve ser redirecionado para a página inicial", () => {
  cy.visit("/")
  cy.get(loginSelectors.userIcon).should("contain.text", loginSelectors.userNameText)
})