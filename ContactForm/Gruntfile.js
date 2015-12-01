module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	
	grunt.initConfig({
		jsonlint: {
			checkConfig: {
				src: ["www/config.json"]
			},
			checkEnUsTranslation: {
				src: ["www/locales/en-US/translation.json"]
			}
		}
	});
	
	grunt.registerTask("default", ["jsonlint"]);
};
