describe('MyTestSuite', () => {

    //loading json data in hook block
    // let userData
    // before(()=>{     
    //     cy.fixture('orangeHrm').then((data)=>{
    //         userData =data

    //     })
    // })
    

    it('Data Driven Demo Test', () => {


        cy.fixture('orangeHrm2').then((data) =>{
            
            data.foreach(userData => {
            

                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                
                cy.xpath("//input[@name='username']").type(userData.username)
                cy.xpath("//input[@name='password']").type(userData.password)
  
                cy.xpath("//button[@type='submit']").click()

                if(userData.username =='Admin' && userData.password =='admin123'){
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userData.expected)

                    cy.get(".oxd-userdropdown-name").click()
                    cy.get(":nth-child(4) > .oxd-userdropdown-link").click()

                
                }else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userData.expected)
                }

              
            })
        
        })
    })


    // it('Fixtures Demo Test Hook block', () => {

    //     cy.log("************ Searching  **********")
     
    // })

})