const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 5000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 5,
    openMode: 5,
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern = [
        "cypress/e2e/demoTests.cy.js",
      ]
      // IMPORTANT: need to return the changed config
      // so Cypress knows about your changes
      return config
    },
    baseUrl: 'https://admin.staging.spot2.mx/',
  },
},
);
