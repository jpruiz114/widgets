module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	
	grunt.initConfig({
		jsonlint: {
			checkBowerJSON: {
				src: ["bower.json"]
			},
			checkComposerJSON: {
				src: ["composer.json"]
			},
			checkLocales: {
				src: ["locales/en/translation.json", "locales/es/translation.json"]
			}
		},
		jsvalidate: {
			options:{
				esprimaOptions: {},
				globals: {},
				verbose: true
			},
			targetName:{
				files:{
					src:["js/index.js"]
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: "normal"
				},
				files: {
					"css/index.css": "sass/index.scss"
				}
			}
		},
	});
	
	grunt.registerTask("default", ["jsonlint", "jsvalidate", "sass"]);
};
