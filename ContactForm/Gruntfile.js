module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	
	grunt.initConfig({
		jsonlint: {
			checkBowerJSON: {
				src: ["bower.json"]
			},
			checkComposerJSON: {
				src: ["composer.json"]
			}
		}
	});
	
	grunt.registerTask("default", ["jsonlint"]);
};
