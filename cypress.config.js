const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    experimentalSessionAndOrigin: true,
    env: {
      hideCredentials: true,
      requestMode: true,
       username: 'mateusefigenio55@gmail.com',
        password: 'teste'
    },
    experimentalRunAllSpecs: true,
    specPattern: "**/*.feature",
     setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)], 
      });

      on("file:preprocessor", bundler);
     addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    stepDefinitions: "cypress/e2e/Steps/*.{js,ts}",
  },
  fixturesFolder: false,
  video: false,
});
