class Login
{

    setUsername(username)
    {
        cy.xpath("//input[@name='username']").type(username)
        
    }

    setPassword(password){
        cy.xpath("//input[@name='password']").type("admin123")    
    }
    
    clickSubmit(){
        cy.xpath("//button[@type='submit']").click()
    }

    verifyLogin(){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',"Dashboard")
    }
}

export default Login;
