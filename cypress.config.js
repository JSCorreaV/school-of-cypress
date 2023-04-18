const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    //watchForFilesChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
