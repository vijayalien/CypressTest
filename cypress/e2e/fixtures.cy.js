
describe('MyTestSuite', () => {

    //loading json data in hook block
    let userData
    before(()=>{     
        cy.fixture('orangeHrm').then((data)=>{
            userData =data

        })
    })
    

    it('Fixtures Demo Test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath("//input[@name='username']").type(userData.username)
        cy.xpath("//input[@name='password']").type(userData.password)
  
        cy.xpath("//button[@type='submit']").click()

        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userData.expected)
     
    
    })


    // it('Fixtures Demo Test Hook block', () => {

    //     cy.log("************ Searching  **********")
     
    // })

})