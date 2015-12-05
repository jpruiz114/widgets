<?php
$basePath = "/frontend-test/Profile/";

// Remove the directory path we don't want
$request = str_replace($basePath, "", $_SERVER["REQUEST_URI"]);

// Split the path by "/"
$params = explode("/", $request);

$lang = "";

if (!empty($params)) {
    if (sizeof($params) >= 1) {
        $lang = $params[0];
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

                    app.setBasePath("<?php echo $basePath; ?>");

                    app.initialize(chosenLang);
                } // End of the function.
            );
        </script>

        <?php include_once("../ga-tracking.php") ?>
    </head>

    <body>
        <div id="wrapper">
            <div id="profile">
                <div id="profile-header">

                </div>

                <div class="profile-options">
                    <ul class="vertical">
                        <li>
                            <a href="#"">Edit user</a>
                        </li>

                        <li>
                            <a href="#"">Web statistics</a>
                        </li>

                        <li>
                            <a href="#"">Upload settings</a>
                        </li>

                        <li>
                            <a href="#"">Events</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
