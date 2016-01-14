// TODO - somehow auto start the server?
exports.config = {
    baseUrl: 'http://localhost:3000/',

    specs: [
        'e2e/**/*.e2e.js'
    ],
    exclude: [],

    framework: 'jasmine2',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 50000,
        print: function () {
        }
    },

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },

    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter'); // eslint-disable-line
        require('babel-core/register');
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayPendingSpec: true
        }));

        function forElement(el) {
            return function () {
                return element(by.css(el)).isPresent();
            };
        }

        browser.manage().timeouts().implicitlyWait(5000);
        browser.waitForElement = function (element, duration) {
            browser.wait(forElement(element), duration);
        };
    },

    useAllAngular2AppRoots: true
};
