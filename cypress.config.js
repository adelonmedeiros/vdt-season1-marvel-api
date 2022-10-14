const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/**/*.cy.js",
    baseUrl: "http://marvel-qa-cademy.herokuapp.com"
  },
});
