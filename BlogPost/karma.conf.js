module.exports = function(config) {
	"use strict";
	config.set({
		autoWatch: false,
		basePath: "",
		browsers: ["PhantomJS"],
		colors: true,
		files: ["test/*.spec.js"],
		frameworks: ["chai", "mocha"],
		// Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		port: 9876,
		reporters: ["progress"],
		singleRun: true
	});
};
