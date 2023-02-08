describe('Assertions', () => {
    it('Implicit Assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      // cy.url().should('contain','orangehrmlive')
      // cy.url().should('include','orangehrmlive.com')
      // cy.title().should('eq','OrangeHRM')
    
      // cy.url().should('contain','orangehrmlive')
      // .should('include','orangehrmlive.com')
      // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.get('img[alt="company-branding"]').should('be.visible')  //logo visible or not
      .and('exist')
      
      //No of links
      cy.xpath('//a').should('have.length','5')

      cy.xpath("//input[@name='username']").type("Admin")
      cy.xpath("//input[@name='password']").type("admin123")
      
    })


    it('Exxplicit Assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
      cy.xpath("//input[@name='username']").type("Admin")
      cy.xpath("//input[@name='password']").type("admin123")

      cy.xpath("//button[@type='submit']").click()

      let expName ="Dumbosamsam Collingsmohanmohan"
      cy.get('.oxd-userdropdown-name').then(  (x)=> {

          let actName = x.text()
          //BDD Style
          expect(actName).to.equal(expName)
          //expect(actName).to.not.equals(expName)
          expect(actName).to.not.null


          //TDD Style
          assert.equal(expName,actName)
          //assert.notEqual(expName,actName)
          assert.isNotEmpty(actName,"Value is empty")
          
          } )

       cy.get('.oxd-userdropdown-tab').click()
       cy.xpath("//a[contains(text(),'About')]").click()
       cy.xpath("//div[@class='oxd-grid-2 orangehrm-about']").should('contain','OrangeHRM')   
       cy.xpath("//button[@class='oxd-dialog-close-button oxd-dialog-close-button-position']").click()

    })

  })


describe('Tabs Assertions', () => {
    it('Dashboard Tabs Assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
      cy.get('img[alt="company-branding"]').should('be.visible')  //logo visible or not
      .and('exist')
      
      //No of links
      cy.xpath('//a').should('have.length','5')

      cy.xpath("//input[@name='username']").type("Admin")
      cy.xpath("//input[@name='password']").type("admin123")
      cy.xpath("//button[@type='submit']").click()
      
      //click on admin
      cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click()
      //cy.get('.oxd-topbar-header-title').should('contain','Admin User Management')
      
      //click on PIM
      cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click()
      cy.get('.oxd-topbar-header-title').should('eq','PIM')
      
      //click on leave
      cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[3]").click()
      cy.get('.oxd-topbar-header-breadcrumb').should('eq','Leave')

      //click on Time
      cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[4]").click()
      cy.get('.oxd-topbar-header-breadcrumb').should('contain','Time')

      //click on Recruitment
      cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[5]").click()
      cy.get('.oxd-topbar-header-breadcrumb').should('eq','Recruitment')

      //click on My Info
      cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[6]").click()
      cy.get('.oxd-topbar-header-breadcrumb').should('eq','PIM')

      //click on Performance
      cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[7]").click()
      cy.get('.oxd-topbar-header-breadcrumb').should('contain','Performance')

      
    })

  })
