describe('Moneycontrol Page Tests', () => {
  beforeEach(() => {
    // Visit the Moneycontrol website
    cy.visit('https://www.moneycontrol.com/');
  });

  it('Should have a logo in the header', () => {
    


    // Check if the header element exists
    cy.get('.bs-header').should('exist');

    // Check if the logo image exists within the header element
    cy.get('.bs-header img').should('exist');
  });

  it('Should have a search box in the header', () => {
    // Check if the header element exists
    cy.get('.bs-header').should('exist');

    // Check if the search box input field exists within the header element
    cy.get('.bs-header input[type="text"]').should('exist');
  });

  it('Should display stock quotes in the home page', () => {
    // Check if the stock quotes container exists on the home page
    cy.get('#mc_home_index_wrapper').should('exist');

    // Check if the stock quotes container contains at least one quote
    cy.get('#mc_home_index_wrapper .indexlist_box').should('have.length.gte', 1);
  });

  it('Should display business news articles in the home page', () => {
    // Check if the business news container exists on the home page
    cy.get('#mc_home_latestnews_wrapper').should('exist');

    // Check if the business news container contains at least one article
    cy.get('#mc_home_latestnews_wrapper .clearfix').should('have.length.gte', 1);
  });

  it('Should display market updates in the market page', () => {
    // Visit the Market page
    cy.visit('https://www.moneycontrol.com/markets/');

    // Check if the market updates container exists on the Market page
    cy.get('#mc_markets_bar .marketupdate_box').should('exist');

    // Check if the market updates container contains at least one update
    cy.get('#mc_markets_bar .marketupdate_box').should('have.length.gte', 1);
  });

  it('Sauce Labs Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[placeholder="Username"]').type("standard_user")
    cy.get('[placeholder="Password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('.title').contains("Products")
    cy
  })
});