const fs = require('fs')

exports.config = {
    specs: [
        './test/e2e/**/*.js'
    ],

    maxInstances: 10,

    capabilities: [
      {
        browserName: 'chrome'
      },
      {
        browserName: 'firefox'
      }
    ],

    sync: true,

    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',

    coloredLogs: true,

    bail: 0,

    screenshotPath: './errorShots/',

    baseUrl: 'http://localhost:3000',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],

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
      browser.addCommand('customDragDrop', function (dragSource, dropTarget) {
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
   }
}
