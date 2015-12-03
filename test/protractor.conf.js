// TODO - jgodi - add ability to run in phantomjs
exports.config = {
    baseUrl: 'http://localhost:3001/',

    allScriptsTimeout: 11000,

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
        showTiming: true
    },

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },

    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',

    specs: [
        'e2e/**/*.e2e.js'
    ],

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }
};
