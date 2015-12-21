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
        require('babel-core/register');
        browser.ignoreSynchronization = true;
        var SpecReporter = require('jasmine-spec-reporter');
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

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
    useAllAngular2AppRoots: true
};
