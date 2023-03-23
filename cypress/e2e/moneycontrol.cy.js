
describe('moneycontrol validation', () => {
    it('Open moneycontrol website and open page', () => {
      cy.visit('https://www.moneycontrol.com/')

      cy.wait(9000)
      
      cy.get('[href="http://www.moneycontrol.com/stocks/marketstats/index.php"]').click()
    })

    
})