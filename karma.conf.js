var WebpackConfig = require("./webpack.config");

module.exports = function(config) {
    config.set({

        // Frameworks to use
        frameworks: ["jasmine"],


        // List of files / patterns to load in the browser
        files: [
            "src/**/*.js"
        ],

        // List of file to transform using a plugin before running the tests
        preprocessors: {
            "src/**/*.spec.js": ["webpack"]
        },

        // Test results reporter to use
        // Possible values: "dots", "progress"
        // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["progress"],


        // Web server port
        port: 9876,


        // Enable / disable colors in the output (reporters and logs)
        colors: true,


        // Level of logging
        // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers
        // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["PhantomJS"],


        // Continuous Integration mode
        // If true, Karma captures browsers, runs the tests and exits
        singleRun: false,


        // Concurrency level
        // How many browser should be started simultaneous
        concurrency: Infinity,


        // Configure the Webpack test plugin to use the same config used to build the app
        webpack: {
            module: WebpackConfig.module,
            resolve: WebpackConfig.resolve,
            output: {
                filename: "test.bundle.js"
            }
        }
    });
};
