var app = {
	/**
	 * Method that initializes the app.
	 */
	initialize: function() {
		var language = app.getBrowserLanguage();
		console.log("language" + " = " + language);
		
		
	},
	/**
	 * Method that retrieves the current navigator language.
	 */
	getBrowserLanguage() {
		var language = window.navigator.userLanguage || window.navigator.language;
		
		return language;
	}
};
