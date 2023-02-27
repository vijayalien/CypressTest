//before
//after
//beforeEach
//afterEach


describe('MyTestSuite', () => {

    before(()=>{

        cy.log("*********** Before Tag to launch app**********")
    })

    after(()=>{

        cy.log("*********** After Tag to Close app **********")
    })

    beforeEach(()=>{

        cy.log("*********** Before Each Tag to login  **********")

    })

    afterEach(()=>{

        cy.log("***********after each Tag to logout  **********")
    })

    it('Search', () => {

        cy.log("************ Searching  **********")
     
    })


    it('advance search', () => {
        cy.log("************Advance Searching  **********")
        
    })


    it('listing products', () => {
        cy.log("************ Listing Products  **********")
        
    })

})
