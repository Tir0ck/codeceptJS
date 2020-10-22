const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900',
      waitForAction: 500,
      waitForNavigation: 'load'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/Main.js',
    loginPage: './pages/LoginForm.js',
    resultPage: './pages/SearchResult.js',
    navigationPanel: './fragments/NavigationPanel.js',
    searchRow: './fragments/SearchRow.js',
    infoRow: './fragments/InfoRow.js',
    locationRow: './fragments/LocationRow.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJS',
  plugins: {
    allure: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
