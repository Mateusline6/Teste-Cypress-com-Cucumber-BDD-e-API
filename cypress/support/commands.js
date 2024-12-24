Cypress.Commands.add("login", () => {

  cy.session("login", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    cy.visit("/login");
    cy.get('[data-qa="login-email"]').type(username)
    cy.get('[data-qa="login-password"]').type(password, { log: false })
    cy.get('[data-qa="login-button"]').click()

  })

})
