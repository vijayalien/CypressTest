describe('My First Test', () => {
    it('Open Google', () => {
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.title().should('eq','Google')
    })
  })
