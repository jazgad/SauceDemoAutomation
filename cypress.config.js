const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require('dotenv').config()


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    on("file:preprocessor", cucumber())  
      // implement node event listeners here
    },
    testIsolation: false,
    specPattern:'**/*.feature'
  },
});

