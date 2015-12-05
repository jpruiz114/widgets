var app = {
    /**
     * Method that initializes the app.
     */
    initialize: function (chosenLang) {
        $("#profile-container").show();
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
    }
};
