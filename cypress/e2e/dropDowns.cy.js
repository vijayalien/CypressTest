
describe('Handle Drop Downs', () => {
    it.skip('Handling Drop Downs with Select', () => {
      cy.visit('https://www.zoho.com/commerce/free-demo.html')

      cy.get('#zcf_address_country').select("India")
      .should('have.value','India')
    })

    it.skip('Handling Drop Downs without select tag', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
  
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('India').type('{downArrow}').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','India')
    })

    it.skip('Handling Auto Suggest Drop down', () => {
        cy.visit('https://www.wikipedia.org/')
  
        cy.get('#searchInput').type('Mumbai')
        cy.get('.suggestion-text').contains('Mumbai').click()
        cy.get('.mw-page-title-main').contains('Mumbai').should('contain','Mumbai')
    
    })

    it('Dynamic Drop down', () => {
        cy.visit('https://www.google.com/')
  
        cy.get('.gLFyf').type('Cypress Automation')
        cy.wait(4000)
        cy.get('div.wM6W7d>span').each( ( $el , index, $list ) =>{
                if($el.text() == 'cypress automation tutorial')
                {
                    cy.wrap($el).click()
                }
        })

        cy.get('.gLFyf').should('have.value','cypress automation tutorial')
    
    })

})