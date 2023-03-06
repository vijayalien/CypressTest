describe('Capture Screenshot and Videos', () => {

    it('Capture Screenshot & Videos', () => {
       cy.visit("https://demo.opencart.com/")
       cy.screenshot("homepage")

       cy.get("img[title='Your Store']").screenshot("logo")

    })

    it('Capture Screenshot & Videos on failures', () => {
        //cypress automatically captures screenshots and videos when run through CLI

        cy.visit("https://demo.opencart.com/")
        cy.get("li:nth-child(7) a:nth-child(1)").click()

        cy.get("#content >h2").should('have.text','Tablets')
     })
 

})