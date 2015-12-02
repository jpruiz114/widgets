var app = {
	/**
	 * Method that initializes the app.
	 */
	initialize: function(chosenLang) {
		if (chosenLang) {
			// It wont make any sense to show the link for the current lang.
			app.hideLanguageLinkNotNeeded(chosenLang);

			// Set the given language as the preferred one.
			app.setPreferredLanguage(chosenLang);
		} else {
			// Define the language.
			app.defineLanguage();
		}

		// Load the defined language.
		app.loadLanguage();

		// Handle the click event for the tokenizer.
		$("#add-another").click(
			function() {
				app.addAnotherContact();
			}
		);

		// Initialize the tokenizer.
		$("#email-tokenizer").tokenizer();

		// Initialize the green checkbox.
		$("input").iCheck({
			checkboxClass: "icheckbox_minimal-green",
			radioClass: "iradio_minimal-green",
			increaseArea: "20%"
		});

		// Initialize the ladda button.
		var l = Ladda.create(document.querySelector(".send-mail"));

		$(".send-mail").click(
			function() {
				app.validateFormData();
			}
		);
	},

	/**
	 * Function that hides the lang of the current url if it's the case.
	 * @param currentLang
	 */
	hideLanguageLinkNotNeeded: function(currentLang) {
		if (currentLang == app.LANGUAGE_CODE_FOR_ENGLISH) {
			$("#go-to-en-page").hide();
		}

		if (currentLang == app.LANGUAGE_CODE_FOR_SPANISH) {
			$("#go-to-es-page").hide();
		}
	},
	
	/**
	 * Function that defines the form language based on the browser setup language.
	 */
	defineLanguage: function() {
		var language = app.getBrowserLanguage();
		console.log("language" + " = " + language);
		
		if (language != app.LANGUAGE_CODE_FOR_ENGLISH && language != app.LANGUAGE_CODE_FOR_SPANISH) {
			language = app.DEFAULT_LANGUAGE;
		}
		
		console.log("language" + " = " + language);
		
		app.setPreferredLanguage(language);
	},
	
	/**
	 * Function that loads the json lang file.
	 */
	loadLanguage: function() {
		var language = app.getPreferredLanguage();
		
		var options = {lng: language, resGetPath: "locales/__lng__/__ns__.json"};
		
		i18n.init(options, app.callback_i18n);
	},
	
	/**
	 * Function that handles the loading of the language file.
	 * @param err
	 * @param t
	 */
	callback_i18n: function(err, t) {
		$("#wrapper").i18n();
		
		// Save the text object for later usage.
		app.setTextObject(t);
		
		//var appName = t("app.name");
	},
	
	/**
	 * Variable that holds the i18n language file for JavaScript usage.
	 */
	textObject: "",
	
	/**
	 *
	 * @param _textObject
	 */
	setTextObject: function(_textObject) {
		this.textObject = _textObject;
	},
	
	/**
	 *
	 * @returns {string}
	 */
	getTextObject: function() {
		return this.textObject;
	},
	
	/**
	 * Default language for the app.
	 */
	DEFAULT_LANGUAGE: "en",
	
	/**
	 * Language code for english.
	 */
	LANGUAGE_CODE_FOR_ENGLISH: "en",
	
	/**
	 * Language code for spanish.
	 */
	LANGUAGE_CODE_FOR_SPANISH: "es",
	
	/**
	 *
	 * @param preferredLanguage
	 */
	setPreferredLanguage: function(preferredLanguage) {
		localStorage.setItem("contact_form_preferred_language", preferredLanguage);
	},

	/**
	 *
	 */
	getPreferredLanguage: function() {
		return localStorage.getItem("contact_form_preferred_language");
	},
	
	/**
	 * Method that retrieves the current navigator language.
	 */
	getBrowserLanguage: function() {
		var language = window.navigator.userLanguage || window.navigator.language;
		
		return language;
	},

	/**
	 * This will be equal to clicking inside the contacts field, thing that will trigger a focus event on it.
	 */
	addAnotherContact: function() {
		$(".tokenizer").click();
	},

	/**
	 * This function retrieves the values inside the contact field.
	 * @returns Array with the values inside the contact field.
	 */
	getCurrentEmails: function() {
		var data = $("#email-tokenizer").val();

		var listOfContacts = data.split(",");

		return listOfContacts;
	},

	/**
	 * Function that validates the provided contacts.
	 */
	validateContacts: function() {
		var listOfContacts = app.getCurrentEmails();
		console.log("listOfContacts" + " = " + listOfContacts);

		if (listOfContacts) {
			var numberOfContacts = listOfContacts.length;
			console.log("numberOfContacts" + " = " + numberOfContacts);

			if (numberOfContacts > 0) {

			} else {

			}
		}
	},

	/**
	 * Function that handles the form validation.
	 */
	validateFormData: function() {
		// Validate the contacts.
		app.validateContacts();


	}
};
