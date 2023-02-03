  describe('Sauce Labs', () => {
    it('Sauce Labs Login', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[placeholder="Username"]').type("standard_user")
      cy.get('[placeholder="Password"]').type("secret_sauce")
      cy.get('#login-button').click()
      cy.get('.title').contains("Products")
    })
  })

