import 'cypress-iframe'
require('@4tw/cypress-drag-drop')


describe('Performing mouse actions', () => {
    it('Mouse hover', () => {
        cy.visit('https://demo.opencart.com/')
      cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click()

      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
      .should('be.visible')

    })

    it('Right Click', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-list.context-menu-root >:nth-child(7) >span').should('contain',"quit")

    })

      
    it('Double click', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick')
        cy.frameLoaded('#iframeResult')

        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger("dblclick")
        cy.iframe('#iframeResult').find('#demo').should('have.value','Hello World')
    })

      
    it.only('Drag and Drop using plugin', () => {
        cy.visit('https://demo.automationtesting.in/Static.html')

        cy.wait(10000)
        cy.get('#gallery > :nth-child(1)').drag("#trash")
  
    })

      
})