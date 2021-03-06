module.exports = {
    entry: ["./utils", "./app"], // can be an array or a string
	output: {
        // path: __dirname,
		filename: "bundle.js"
	},
	// Loaders apply transformations before a file is added to bundle.js
	module: {
		preLoaders: [
			// JSHINT preLoader. Runs before the loaders
			{
				test: /\.js$/, // include .js files
				exclude: /node_modules/, // exclude node_modules
				loader: "jshint-loader"
			}
		],

		loaders: [
			// Babel loader. Transforms .es6 file from es6->es5 before it's added to bundle.js
			{
				test: /\.es6$/, // include .es6 files
				exclude: /node_modules/, // exclude node_modules
				loader: "babel-loader"
			}
		]
	},


	// Optional object that allows rules in addition to .jshintrc
	jshint: {
		"unused": true
	},

	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6']
	}
};


