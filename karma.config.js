module.exports = (config) => {

	let scriptPreprocessors = ['webpack', 'sourcemap'];

	function isDebug(argument) {
		return argument === '--debug';
	}

	if (process.argv.some(isDebug)) {
		scriptPreprocessors.push('coverage');
	}

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use available frameworks:
        // https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'client/app.js',
            'spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser available
        // preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'client/**/*.js': scriptPreprocessors,
            'spec.js': ['webpack']
        },

        webpack: {
            devtool: 'inline-source-map',
            isparta: {
                embedSource: true,
                noAutoWrap: true,
                // these babel options will be passed only to isparta and not to babel-loader
                babel: {
                    presets: ['es2015']
                }
            },
            module: {
                preLoaders: [
                    {
                        test: /\.js$/,
                        exclude: [/node_modules/, /public/, /spec.js$/],
                        loader: 'isparta'
                     }, {
                         test: /spec.js$/,
                         exclude: [/node_modules/, /public/],
                         loaders: ['babel']
                    }, {
                        test: /\.less$/,
                        loader: 'style!css!less'
                    }, {
                        test: /\.json$/,
                        loader: 'json'
                    }, {
                        test: /\.html$/,
                        loader: 'raw'
                    }
                ]
            },
            watch: true
        },

        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-sourcemap-loader'),
            require('karma-babel-preprocessor'),
            require('karma-coverage')
        ],
        // test results reporter to use possible values: 'dots', 'progress' available
        // reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: './tmp/coverage/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers available browser launchers:
        // https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode if true, Karma captures browsers, runs the tests
        // and exits
        singleRun: false,

        // Concurrency level how many browser should be started simultaneous
        concurrency: Infinity
    })
};
