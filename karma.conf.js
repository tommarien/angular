// Karma configuration
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: 'app',

        // frameworks to use
        frameworks: ['mocha', 'chai-sinon', 'jquery-chai'],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/underscore/underscore.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/AngularJS-Toaster/toaster.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/uri-templates/uri-templates.js',
            'bower_components/angular-model-factory/dist/angular-model-factory.js',
            'app.js',
            'filters/*.js',
            'services/*.js',
            'models/userModel.js',
            '**/*.spec.js'
        ],

        'plugins': [
            'karma-mocha',
            'karma-chai',
            'karma-chai-sinon',
            'karma-jquery-chai',
            'karma-phantomjs2-launcher',
            'karma-sinon',
            'karma-spec-reporter'
        ],

        // list of files to exclude
        exclude: [
            'bower_components/**/*.spec.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS2'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
    })
}
