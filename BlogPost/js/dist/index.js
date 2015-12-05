var app = {
	/**
	 * Method that initializes the app.
	 */
	initialize: function(chosenLang, chosenId) {
		if (chosenLang) {
			alert("chosenLang" + " = " + chosenLang);

			// Verify if the requested lang is actually supported. If not, use the default one.
			chosenLang = app.failSafeChosenLang(chosenLang);

			alert("chosenLang" + " = " + chosenLang);

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
		var postLoaded = app.loadPost(chosenId);

		if (postLoaded) {
			// Gracefully show the post container.
			$("#post-container").fadeIn();
		} else {
			// Show a message indicating that the requested post could not be found.
			$("#post-not-found").fadeIn();
		}
	},

	/**
	 * Function that validates if the requested language is actually supported. If not, provides the default one.
	 * @param chosenLang
	 */
	failSafeChosenLang: function(chosenLang) {
		var resultLang;

		if (chosenLang != app.LANGUAGE_CODE_FOR_ENGLISH && chosenLang != app.LANGUAGE_CODE_FOR_SPANISH) {
			resultLang = app.DEFAULT_LANGUAGE;
		}

		return resultLang;
	},

	/**
	 *
	 */
	basePath: "",

	/**
	 *
	 * @param basePath
	 */
	setBasePath: function(basePath) {
		this.basePath = basePath;
	},

	/**
	 *
	 * @returns {string}
	 */
	getBasePath: function() {
		return this.basePath;
	},

	/**
	 *
	 */
	postsInfoLocation: "",

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
			url: app.getBasePath() + "/config.json",
			dataType: "json",
			error: function() {
				app.postsInfoLocation = app.PROFILES_INFO_LOCATION_DEFAULT;

				app.postImagesLocation = app.POST_IMAGES_LOCATION_DEFAULT;

				app.profilePicsLocation = app.PROFILE_PICS_LOCATION_DEFAULT;
			},
			success: function(data) {
				$.each(
					data.config,
					function(index, element) {
						if (element.name == "posts-info-location") {
							app.postsInfoLocation = element.value;
						}

						if (element.name == "post-images-location") {
							app.postImagesLocation = element.value;
						}

						if (element.name == "profile-pics-location") {
							app.profilePicsLocation = element.value;
						}
					}
				);

				if (!app.postsInfoLocation) {
					app.postsInfoLocation = app.PROFILES_INFO_LOCATION_DEFAULT;
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
	DEFAULT_POST_ID: "1",

	/**
	 * Function that preloads an image.
	 * @param path
	 * @returns {boolean}
	 */
	preloadImage: function(path) {
		var imageLoaded;

		if (path) {
			$.ajax({
				async: false,
				type: "GET",
				url: path,
				success: function(data) {
					imageLoaded = true;
				},
				error: function(error, txtStatus) {
					imageLoaded = false;
				}
			});
		} else {
			imageLoaded = false;
		}

		return imageLoaded;
	},

	/**
	 *
	 * @param chosenId
	 * @returns {*}
	 */
	loadPost: function(chosenId) {
		if(!chosenId){
			chosenId = app.DEFAULT_POST_ID;
		}

		var postInfoPath = app.getBasePath() + app.postsInfoLocation + "post_" + chosenId + ".json";

		var postLoaded;

		$.ajax({
			async: false,
			global: false,
			url: postInfoPath,
			dataType: "json",
			error: function() {
				postLoaded = false;
			},
			success: function(data) {
				var postPhoto = data.info["post-photo"];

				var postPhotoPath = app.getBasePath() + app.postImagesLocation + postPhoto;

				var postPhotoLoaded = app.preloadImage(postPhotoPath);

				if (postPhotoLoaded) {
					$("#post-pic").attr("src", postPhotoPath);
				} else {
					// @todo: Handle this.
				}

				var profilePic = data.info["profile-pic"];

				var profilePicPath = app.getBasePath() + app.profilePicsLocation + profilePic;

				var profilePicLoaded = app.preloadImage(profilePicPath);

				if (profilePicLoaded) {
					$("#profile-pic").css("background-image", "url(" + profilePicPath + ")");
				} else {
					//@todo: Handle this.
				}

				var profileName = data.info["profile-name"];
				$("#author-name").html(profileName);

				var postContent = data.info["post-content"];
				$("#author-comment").html(postContent);

				var followersNumber = data.info["followers-number"];
				$("#follow-label").html(followersNumber);

				var commentsNumber = data.info["comments-number"];
				$("#comment-label").html(commentsNumber);

				var likesNumber = data.info["likes-number"];
				$("#like-label").html(likesNumber);

				postLoaded = true;
			}
		});

		return postLoaded;
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

		var title = "";

		var textObject = app.getTextObject();

		if ($("#follow-anchor").hasClass("active")) {
			currentValue += 1;

			title = textObject("blog-post.unfollow");
		} else {
			currentValue -= 1;

			title = textObject("blog-post.follow");
		}

		$("#follow-anchor").attr("title", title);

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

		var title = "";

		var textObject = app.getTextObject();

		if ($("#like-anchor").hasClass("active")) {
			currentValue += 1;

			title = textObject("blog-post.unlike");
		} else {
			currentValue -= 1;

			title = textObject("blog-post.like");
		}

		$("#like-anchor").attr("title", title);

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
		

		if (language != app.LANGUAGE_CODE_FOR_ENGLISH && language != app.LANGUAGE_CODE_FOR_SPANISH) {
			language = app.DEFAULT_LANGUAGE;
		}

		

		app.setPreferredLanguage(language);
	},

	/**
	 * Function that loads the json lang file.
	 */
	loadLanguage: function() {
		var language = app.getPreferredLanguage();

		var options = {lng: language, resGetPath: app.getBasePath() + "locales/__lng__/__ns__.json"};

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
