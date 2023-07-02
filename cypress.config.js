const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://kasirdemo.belajarqa.com/login",
    specPattern: "cypress/integration/**/*.spec.js",
    supportFile: false,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false
  },
});
