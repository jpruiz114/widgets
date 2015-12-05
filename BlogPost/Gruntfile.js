module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);

	grunt.loadNpmTasks("grunt-remove-logging");

	grunt.initConfig({
		jsonlint: {
			checkBowerJSON: {
				src: ["bower.json"]
			},
			checkModuleConfig: {
				src: ["config.json"]
			},
			checkProfilesInfo: {
				src: ["info/post_1.json", "info/post_2.json", "info/post_3.json"]
			},
			checkLocales: {
				src: ["locales/dev/translation.json", "locales/en/translation.json", "locales/es/translation.json"]
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
		removelogging: {
			dist: {
				src: "js/index.js",
				dest: "js/dist/index.js"
			}
		},
		sass: {
			dist: {
				options: {
					style: "normal" /*Can be changed to compressed */
				},
				files: {
					"css/index.css": "sass/index.scss"
				}
			}
		}
	});
	
	grunt.registerTask("default", ["jsonlint", "jsvalidate", "removelogging", "sass"]);
};
