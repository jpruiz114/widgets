var app = {
    /**
     * Method that initializes the app.
     */
    initialize: function(chosenLang, chosenId) {
        if (chosenLang) {
            // Verify if the requested lang is actually supported. If not, use the default one.
            chosenLang = app.failSafeChosenLang(chosenLang);

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

        // Load the given profile.
        var profileLoaded = app.loadProfile(chosenId);

        if (profileLoaded) {
            // Gracefully show the post container.
            $("#profile").fadeIn();
        } else {
            // Show a message indicating that the requested post could not be found.
            $("#profile-not-found").fadeIn();
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
        } else {
            resultLang = chosenLang;
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
    profilesInfoLocation: "",

    /**
     *
     */
    PROFILES_INFO_LOCATION_DEFAULT: "info/",

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
                app.profilesInfoLocation = app.PROFILES_INFO_LOCATION_DEFAULT;

                app.profilePicsLocation = app.PROFILE_PICS_LOCATION_DEFAULT;
            },
            success: function(data) {
                $.each(
                    data.config,
                    function(index, element) {
                        if (element.name == "profiles-info-location") {
                            app.profilesInfoLocation = element.value;
                        }

                        if (element.name == "profile-pics-location") {
                            app.profilePicsLocation = element.value;
                        }
                    }
                );

                if (!app.profilesInfoLocation) {
                    app.profilesInfoLocation = app.PROFILES_INFO_LOCATION_DEFAULT;
                }

                if (!app.profilePicsLocation) {
                    app.profilePicsLocation = app.PROFILE_PICS_LOCATION_DEFAULT;
                }
            }
        });
    },

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
     */
    DEFAULT_PROFILE_ID: "1",

    /**
     *
     * @param chosenId
     * @returns {*}
     */
    loadProfile: function(chosenId) {
        if(!chosenId){
            chosenId = app.DEFAULT_PROFILE_ID;
        }

        var postInfoPath = app.getBasePath() + app.profilesInfoLocation + "profile_" + chosenId + ".json";

        var profileLoaded;

        $.ajax({
            async: false,
            global: false,
            url: postInfoPath,
            dataType: "json",
            error: function() {
                profileLoaded = false;
            },
            success: function(data) {
                var profilePic = data.info["profile-pic"];

                var profilePicPath = app.getBasePath() + app.profilePicsLocation + profilePic;

                var profilePicLoaded = app.preloadImage(profilePicPath);

                if (profilePicLoaded) {
                    $("#profile-pic").css("background-image", "url(" + profilePicPath + ")");
                } else {
                    //@todo: Handle this.
                }

                

                profileLoaded = true;
            }
        });

        return profileLoaded;
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
