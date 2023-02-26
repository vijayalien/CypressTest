import 'cypress-iframe'

describe('Handle Frames', () => {

    //Approach 1
    it('handling iFrames approach 1', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe')

      let iFrame= cy.get("#mce_0_ifr")
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)
      
      iFrame.clear().type("Welcome {cmd+a}")
      cy.get("button[title='Bold']").click()
    })

    //Approach 2
    it('handling iFrames approach 2 by using custom command', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
  
        cy.getIFrame("#mce_0_ifr").clear().type("Welcome {cmd+a}")
        cy.get("button[title='Bold']").click()
      })

    //Approach 3
    it('handling iFrames approach 3 by using iFrame Plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
  
       cy.frameLoaded('#mce_0_ifr')
       cy.getIFrame('#mce_0_ifr').clear().type("Welcome {cmd+a}")
       cy.get("button[title='Italic']").click()

      })
})