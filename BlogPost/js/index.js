var app = {
	/**
	 * Method that initializes the app.
	 */
	initialize: function(chosenLang, chosenId) {
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

		// Load the configuration.
		app.loadConfig();

		// Setup the click handler for the bottom links.
		app.setupBottomLinkHandlers();

		// Load the given profile.
		var profileLoaded = app.loadProfile(chosenId);

		if (profileLoaded) {
			// Gracefully show the post container.
			$("#post-container").fadeIn();
		} else {

		}
	},

	/**
	 *
	 */
	profilesInfoLocation: "",

	/**
	 *
	 */
	PROFILES_INFO_LOCATION_DEFAULT: "info/",

	/**
	 *
	 */
	postImagesLocation: "",

	/**
	 *
	 */
	POST_IMAGES_LOCATION_DEFAULT: "assets/images/post-images/",

	/**
	 *
	 */
	profilePicsLocation: "",

	/**
	 *
	 */
	PROFILE_PICS_LOCATION_DEFAULT: "assets/images/profile-pics/",

	/**
	 *
	 */
	loadConfig: function() {
		$.ajax({
			async: false,
			global: false,
			url: "config.json",
			dataType: "json",
			error: function() {
				app.profilesInfoLocation = app.PROFILES_INFO_LOCATION_DEFAULT;

				app.postImagesLocation = app.POST_IMAGES_LOCATION_DEFAULT;

				app.profilePicsLocation = app.PROFILE_PICS_LOCATION_DEFAULT;
			},
			success: function(data) {
				$.each(
					data.config,
					function(index, element) {
						if (element.name == "profiles-info-location") {
							app.profilesInfoLocation = element.value;
						}

						if (element.name == "post-images-location") {
							app.postImagesLocation = element.value;
						}

						if (element.name == "profile-pics-location") {
							app.profilePicsLocation = element.value;
						}
					}
				);

				if (!app.profilesInfoLocation) {
					app.profilesInfoLocation = app.PROFILES_INFO_LOCATION_DEFAULT;
				}

				if (!app.postImagesLocation) {
					app.postImagesLocation = app.POST_IMAGES_LOCATION_DEFAULT;
				}

				if (!app.profilePicsLocation) {
					app.profilePicsLocation = app.PROFILE_PICS_LOCATION_DEFAULT;
				}
			}
		});
	},

	/**
	 *
	 */
	DEFAULT_PROFILE_ID: "1",

	/**
	 *
	 * @param chosenId
	 */
	loadProfile: function(chosenId) {
		if(!chosenId){
			chosenId = app.DEFAULT_PROFILE_ID;
		}

		var profileInfoPath = app.profilesInfoLocation + "profile_" + chosenId + ".json";

		$.ajax({
			async: false,
			global: false,
			url: profileInfoPath,
			dataType: "json",
			error: function() {
				return false;
			},
			success: function(data) {
				var postPhoto;
				var profilePic;
				var profileName;
				var postContent;

				$.each(
					data.info,
					function(index, element) {
						if (element.name == "post-photo") {
							postPhoto = element.value;
						}

						if (element.name == "profile-pic") {
							profilePic = element.value;
						}

						if (element.name == "profile-name") {
							profileName = element.value;
						}

						if (element.name == "post-content") {
							postContent = element.value;
						}
					}
				);

				$("#post-pic").attr("src", app.postImagesLocation + postPhoto);

				$("#profile-pic").css("background-image", "url(" + app.profilePicsLocation + profilePic + ")");

				$("#author-name").html(profileName);

				$("#author-comment").html(postContent);

				return true;
			}
		});
	},

	/**
	 * Function that setup the click handler for the bottom links.
	 */
	setupBottomLinkHandlers: function() {
		$(".toggle-anchor").click(
			function()	{
				var currentId = $(this).attr("id");

				if (currentId == "follow-anchor") {
					$(this).toggleClass("active");

					app.handleFollowAnchorClick();
				}

				if (currentId == "comment-anchor") {
					app.handleCommentAnchorClick();
				}

				if (currentId == "like-anchor") {
					$(this).toggleClass("active");

					app.handleLikeAnchorClick();
				}
			}
		)
	},

	/**
	 *
	 */
	handleFollowAnchorClick: function() {
		var currentValue = parseInt($("#follow-label").html());

		if ($("#follow-anchor").hasClass("active")) {
			currentValue += 1;
		} else {
			currentValue -= 1;
		}

		// If this module was real, an api call could be placed here.

		$("#follow-label").html("" + currentValue);
	},

	/**
	 *
	 */
	handleCommentAnchorClick: function() {

	},

	/**
	 *
	 */
	handleLikeAnchorClick: function() {
		var currentValue = parseInt($("#like-label").html());

		if ($("#like-anchor").hasClass("active")) {
			currentValue += 1;
		} else {
			currentValue -= 1;
		}

		// If this module was real, an api call could be placed here.

		$("#like-label").html("" + currentValue);
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
	}
};
