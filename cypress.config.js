const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      testIsolation: false
      defaultCommandTimeout: 30000
      this.screenshotOnRunFailure=true
      // implement node event listeners here
    },
  },
});

