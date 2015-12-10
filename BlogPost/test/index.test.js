describe(
    "index",
    function() {
        beforeEach(
            function() {

            }
        );

        afterEach(
            function() {

            }
        );

        it(
            "preferred language should be null in the beginning",
            function() {
                var preferredLanguage = app.getPreferredLanguage();

                should.not.exist(preferredLanguage);
            }
        );

        it(
            "preferred language shouldn't be null after defined",
            function() {
                app.defineLanguage();

                var preferredLanguage = app.getPreferredLanguage();

                should.exist(preferredLanguage);

                expect(preferredLanguage).to.be.a("string");
            }
        );

        it(
            "base path should be null in the beginning",
            function() {
                var basePath = app.getBasePath();

                should.not.exist(basePath);
            }
        );

        it(
            "base path shouldn't be null after defined",
            function() {
                app.setBasePath("./../");

                var basePath = app.getBasePath();

                should.exist(basePath);

                expect(basePath).to.be.a("string");
            }
        );
    }
);
