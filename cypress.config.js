const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      testIsolation: false
      // implement node event listeners here
    },
  },
});

