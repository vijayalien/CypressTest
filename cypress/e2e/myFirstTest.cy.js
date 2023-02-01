describe('My First Test', () => {
    it('Open Google', () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
    })
  })
