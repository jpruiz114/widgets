var app = {
    /**
     * Method that initializes the app.
     */
    initialize: function () {
        app.loadConfiguration();

        app.buildMenu();
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
            url: app.getBasePath() + "/config.json" + "?" + new Date().getTime(),
            dataType: "json",
            error: function() {
                // @todo
            },
            success: function(data) {
                var newOption;

                $.each(
                    data.options,
                    function(index, currentOption) {
                        

                        newOption = [];

                        newOption["name"] = currentOption["name"];
                        newOption["text"] = currentOption["text"];
                        newOption["icon"] = currentOption["icon"];
                        newOption["notifications"] = currentOption["notifications"];
                        newOption["target"] = currentOption["target"];
                        newOption["go-to-location"] = currentOption["go-to-location"];

                        app.listOfOptions[index] = newOption;
                    }
                );
            }
        });
    },

    /**
     * Function that builds the menu.
     */
    buildMenu: function() {
        var i;

        var currentOption;

        var name;
        var text;
        var icon;
        var notifications;
        var target;

        var html;

        for (i = 0; i<app.listOfOptions.length; i++) {
            currentOption = app.listOfOptions[i];

            name = currentOption["name"];
            text = currentOption["text"];
            icon = currentOption["icon"];
            notifications = currentOption["notifications"];
            target = currentOption["target"];
            goToLocation = currentOption["go-to-location"];

            html = "";
            html += "<li>";
                html += "<a href='" + (goToLocation) + "' name='" + (name ? name : "element_" + i) + "' target='" + (target ? target : "_self") + "'>";

                if (icon) {
                    html += "<i class='fa " + icon + "'></i>";
                }

                html += text;

                if (notifications) {
                    html += "<span class='notification-counter'>" + notifications + "</span>";
                }

                html += "</a>";
            html += "</li>";

            $("#menu").append(html);
        }
    }
};
