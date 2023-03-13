import Login from "../PageObjects/LoginPage"

describe('Page Object Model', () => {

    it('Login with page object model', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const lp= new Login();
        lp.setUsername("Admin")
        lp.setPassword("admin123")
        lp.clickSubmit()
        lp.verifyLogin()
    })
})