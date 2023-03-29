describe('Trendlyne Page Tests', () => {
  
  
    it('Should have a logo in the header', () => {
        cy.visit('https://trendlyne.com/stock-screeners/technical/relative-strength-index-rsi/oversold/today/index/BSELARGECAP/s-p-bse-largecap/');
  
  
      // Check if the header element exists
      cy.get('.titlecase').should('exist');
  
      cy.get('#select2-JS_diviGroupSelector-container').should('contain','BSE Largecap')

      //cy.get(':nth-child(3) > .page-link').click()
      cy.get('.custom-select').select("100")

      //cy.get(':nth-child(3) > .page-link').click()
      

    });

    it('Sauce Labs Login', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[placeholder="Username"]').type("standard_user")
      cy.get('[placeholder="Password"]').type("secret_sauce")
      cy.get('#login-button').click()
      cy.get('.title').contains("Products")
      cy
    })

})

