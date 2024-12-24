import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import selectors from '../page/selecaoProdutosPage'

const product = 'Polo'

Given('Usuário realiza o login', () => {
  cy.login();
})

Given('acessar aba de produtos', () => {
  cy.visit('/products')
})

When('pesquisar produto', () => {
  cy.get(selectors.searchInput).type(product)
  cy.get(selectors.searchButton).click()
})

Then('os resultados de busca devem exibir produtos relacionados', () => {
  cy.get(selectors.productImage).should('be.visible')
  cy.get(selectors.productInfo).should('contain.text', product)
})

When('seleciono o produto que deve aparecer no carrinho', () => {
  cy.get(selectors.addToCartButton).click();
  cy.get(selectors.modalTitle).should('be.visible').and('include.text', 'Added!')
  cy.get(selectors.cartIcon).should('be.visible');
})

Given('que o usuário está logado', () => {
  cy.log(`usuario logado`)
})

When('ele acessa o carrinho', () => {
  cy.visit('/view_cart')
})

Then('os produtos no carrinho devem corresponder aos produtos selecionados', () => {
  cy.get(selectors.cartInfo).should('be.visible').and('include.text', product)
})