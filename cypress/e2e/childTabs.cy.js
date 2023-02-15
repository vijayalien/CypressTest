describe('Handle Multiple Tabs', () => {

    //1)Java script alert it will have some text and an 'OK' button
    it('Child Tab Approach 1', () => {
      cy.visit('https://the-internet.herokuapp.com/windows')

      cy.get(".example >a").invoke('removeAttr','target').click()
      cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
      cy.wait(5000)

      cy.go('back')

    })

    it('Child Tab Approach 2', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
  
        cy.get(".example >a").then((e) =>{
            let newUrl = e.prop('href')
            cy.visit(newUrl)

        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
  
        cy.go('back')
      })
})