const browserstack = require('browserstack-local');

const dragDropCommand = require('./test/support/commands/dragDrop');

const build = `build-${process.env.TRAVIS_BUILD_NUMBER || 'local'}`;
const branch = process.env.TRAVIS_BRANCH || 'local';
const user = process.env.BROWSERSTACK_USERNAME;
const key = process.env.BROWSERSTACK_ACCESS_KEY;

const commonCapabilities = {
  'project': branch,
  'build': build,
  'browserstack.local': true
};

exports.config = {
    specs: [
        './test/e2e/**/*.js'
    ],

    maxInstances: 10,

    capabilities: [
      Object.assign({}, commonCapabilities, {
        'os': 'Windows',
        'os_version': '7',
        'browser': 'chrome',
        'browser_version': '58.0',
        'resolution': '1366x768'
      }),
      Object.assign({}, commonCapabilities, {
        'os': 'OS X',
        'os_version': 'Sierra',
        'browser': 'safari',
        'browser_version': '10.1',
        'resolution': '1280x1024'
      }),
      Object.assign({}, commonCapabilities, {
        'os': 'OS X',
        'os_version': 'Sierra',
        'browser': 'firefox',
        'browser_version': '53.0',
        'resolution': '1920x1080'
      })
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
      'static-server',
      'browserstack'
    ],

    // Static Server config
    staticServerFolders: [
      {mount: '/react-virtual-kanban', path: './build'},
    ],
    staticServerPort: 3000,

    // BrowserStack config
    user,
    key,

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
      browser.addCommand('customDragDrop', dragDropCommand);
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
