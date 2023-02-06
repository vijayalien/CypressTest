const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      testIsolation: false
      defaultCommandTimeout: 30000
      // implement node event listeners here
    },
  },
});

