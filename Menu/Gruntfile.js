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
