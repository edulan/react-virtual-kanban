const fs = require('fs')
const browserstack = require('browserstack-local')

exports.config = {
    specs: [
        './test/e2e/**/*.js'
    ],

    maxInstances: 10,

    capabilities: [
      {
        'os': 'Windows',
        'os_version': '7',
        'browser': 'chrome',
        'browser_version': '58.0',
        'resolution': '1366x768',
        'browserstack.local': true
      },
      {
        'os': 'OS X',
        'os_version': 'Sierra',
        'browser': 'safari',
        'browser_version': '10.1',
        'resolution': '1280x1024',
        'browserstack.local': true
      },
      {
        'os': 'OS X',
        'os_version': 'Sierra',
        'browser': 'firefox',
        'browser_version': '53.0',
        'resolution': '1920x1080',
        'browserstack.local': true
      }
    ],

    sync: true,

    logLevel: 'silent',
    coloredLogs: true,

    bail: 0,

    screenshotPath: './errorShots/',

    baseUrl: 'http://localhost:3000',

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: [
      // 'selenium-standalone',
      'browserstack'
    ],

    // BrowserStack config
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
      ui: 'tdd',
      timeout: 30000,
      compilers: [
        'js:babel-register'
      ],
    },

    before: function (capabilities, specs) {
      browser.addCommand('customDragDrop', (dragSource, dropTarget) => {
       const dragMockScript = fs.readFileSync('node_modules/drag-mock/dist/drag-mock.min.js', 'utf8');

       browser.timeouts('script', 500);

       return browser.executeAsync((text, source, target, done) => {
         const script = document.createElement('script');

         script.text = text;
         document.getElementsByTagName('head')[0].appendChild(script);

         const dragElement = document.querySelector(source);
         const dropElement = document.querySelector(target);

         window.dragMock
           .dragStart(dragElement)
           .dragEnter(dropElement)
           .dragOver(dropElement)
           .delay(250)
           .drop(dropElement)
           .then(done);
       }, dragMockScript.toString(), dragSource, dropTarget);
      });
   },

   // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log("Connecting local");

    return new Promise((resolve, reject) => {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.key}, (error) => {
        if (error) {
          return reject(error);
        }

        console.log('Connected. Now testing...');
        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: function (capabilties, specs) {
    exports.bs_local.stop(() => {});
  }
}
