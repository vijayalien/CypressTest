
describe('Check UI ELements', () => {
    it('Checking Radio Buttons', () => {
      cy.visit('https://itera-qa.azurewebsites.net/home/automation')

      //check visibility
      cy.get("input#male").should('be.visible')
      cy.get("input#female").should('be.visible')

      //selecting radio buttons
      cy.get("input#male").check().should('be.checked')
      cy.get("input#female").should('not.be.checked')

      cy.get("input#female").check().should('be.checked')
      cy.get("input#male").should('not.be.checked')
    })

    it('Checking Checkbox', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
  
        //check visibility
        cy.get("#monday").should('be.visible')
        cy.get("#tuesday").should('be.visible')
        cy.get("#wednesday").should('be.visible')
        
        //selecting single check box
        cy.get("#monday").check().should('be.checked')
        

        //un selecting checkbox
        cy.get("#monday").uncheck().should('not.be.checked')

        //selecting multiple check box    
        cy.get(".form-check-input[type='checkbox']") .check()
        // cy.get("#tuesday").check().should('be.checked')
        // cy.get("#wednesday").check().should('be.checked')
        // cy.get("#saturday").check().should('be.checked')

        cy.get(".form-check-input[type='checkbox']") .uncheck().should("not.be.checked")

        //select first checkbox
        cy.get(".form-check-input[type='checkbox']") .first().check()

        //selecting last checkbox
        cy.get(".form-check-input[type='checkbox']") .last().check()

      })
  })

 