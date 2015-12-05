var app = {
    /**
     * Method that initializes the app.
     */
    initialize: function () {
        app.loadConfiguration();
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
    listOfOptions: [],

    /**
     *
     */
    loadConfiguration: function() {
        $.ajax({
            async: false,
            global: false,
            url: app.getBasePath() + "/config.json",
            dataType: "json",
            error: function() {
                // @todo
            },
            success: function(data) {
                var newOption;

                $.each(
                    data.option,
                    function(index, currentOption) {
                        console.dir(currentOption);

                        newOption = [];

                        newOption["name"] = currentOption["name"];
                        newOption["text"] = currentOption["text"];
                        newOption["icon"] = currentOption["icon"];
                        newOption["notifications"] = currentOption["notifications"];
                        newOption["target"] = currentOption["target"];

                        app.listOfOptions[index] = newOption;
                    }
                );
            }
        });
    }
};
