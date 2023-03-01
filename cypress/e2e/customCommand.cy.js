describe('Custom Commands', () => {

    it('Handling links custom command', () => {
      
        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('.product-name').should('contain.text','Apple MacBook Pro')
    })

    it('Overwriting existing command', () => {
       
        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink('APPLE MACBOOK PRO 13-INCH')
        cy.get('.product-name').should('contain.text','Apple MacBook Pro')        
    })

    it.only('Custom Login command',()=> {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('Log in')
        cy.LoginApp('test123@gmail.com','test123')
        cy.get('.ico-account').should('have.text','My account')

    })

})