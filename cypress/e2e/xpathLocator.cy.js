describe('Sauce Labs', () => {
    it('Sauce Labs Login', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.xpath("//input[@id='user-name']").type("standard_user")
      cy.xpath("//input[@id='password']").type("secret_sauce")
      cy.xpath("//input[@id='login-button']").click
    })
  })

  describe('Title validation', () => {
    it('Click Button', ()=>{
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click
        cy.xpath("//button[@id='add-to-cart-sauce-labs-bike-light']").click
        cy.xpath("//a[@class='shopping_cart_link']").click
        cy.xpath("//button[@id='continue-shopping']").click
      })
  }) 

