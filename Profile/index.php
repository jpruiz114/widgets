<?php
$basePath = "/frontend-test/Profile/";

// Remove the directory path we don't want
$request = str_replace($basePath, "", $_SERVER["REQUEST_URI"]);

// Split the path by "/"
$params = explode("/", $request);

$lang = "";

if (!empty($params)) {
    if (sizeof($params) >= 1) {
        if (is_numeric($params[0])) {
            $id = $params[0];
        } else {
            $lang = $params[0];
        }

        if (sizeof($params) >= 2) {
            $id = $params[1];
        }
    }
}
?>
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">

        <title>Profile</title>

        <meta name="viewport" content="width=device-width, initial-scale=0.8">

        <meta name="author" content="Jean Paul Ruiz">

        <meta name="description" content="This is an example of a profile">

        <meta name="keywords" content="profile">

        <meta name="robots" content="index, follow">

        <meta name="revisit-after" content="7 days">

        <!-- PT Sans is a close match to the popular Myriad Pro -->
        <link href='//fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" type="text/css" href="<?php echo $basePath; ?>components/fontawesome/css/font-awesome.min.css">

        <link rel="stylesheet" type="text/css" href="<?php echo $basePath; ?>css/index.css">

        <script type="text/javascript" src="<?php echo $basePath; ?>components/jquery/dist/jquery.min.js"></script>

        <script type="text/javascript" src="<?php echo $basePath; ?>components/i18next/i18next.min.js"></script>

        <script type="text/javascript" src="<?php echo $basePath; ?>js/dist/index.js"></script>

        <script type="text/javascript">
            /**
             * When all the website resources (Images, scripts) have been loaded.
             */
            $(window).load(
                function() {
                    var chosenLang = "<?php echo($lang); ?>";

                    var chosenId = "<?php echo($id); ?>";

                    app.setBasePath("<?php echo $basePath; ?>");

                    app.initialize(chosenLang, chosenId);
                } // End of the function.
            );
        </script>

        <?php include_once("../ga-tracking.php") ?>
    </head>

    <body>
        <div id="wrapper">
            <div id="top-bar">
                <ul class="langs">
                    <li class="langs-item">
                        <a class="langs-link" href="/frontend-test/BlogPost/en" id="go-to-en-page" target="_self" data-i18n="[title]profile.english-website;profile.english-website"></a>
                    </li>

                    <li class="langs-item">
                        <a class="langs-link" href="/frontend-test/BlogPost/es" id="go-to-es-page" target="_self" data-i18n="[title]profile.spanish-website;profile.spanish-website"></a>
                    </li>
                </ul>
            </div>

            <div class="info-container" id="profile">
                <div id="profile-header">
                    <div class="col" id="profile-pic-container">
                        <div class="circle" id="profile-pic"></div>
                    </div>

                    <div class="col" id="profile-data">
                        <p class="unselectable-text" id="profile-name" unselectable="on"></p>

                        <span class="unselectable-text" data-i18n="profile.followers">
                            <label class="unselectable-text" id="followers-number" unselectable="on"></label>
                        </span>
                    </div>
                </div>
            </div>

            <div class="info-container" id="profile-not-found">
                <i class="fa fa-exclamation-triangle"></i>

                <p data-i18n="profile.profile-not-found"></p>
            </div>
        </div>
    </body>
</html>
