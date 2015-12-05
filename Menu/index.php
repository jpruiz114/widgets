<?php
$basePath = "/frontend-test/Menu/";
?>
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">

        <title>Menu</title>

        <meta name="viewport" content="width=device-width, initial-scale=0.8">

        <meta name="author" content="Jean Paul Ruiz">

        <meta name="description" content="This is an example of a menu">

        <meta name="keywords" content="menu">

        <meta name="robots" content="index, follow">

        <meta name="revisit-after" content="7 days">

        <link href="//fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />

        <!-- PT Sans is a close match to the popular Myriad Pro -->
        <link href='//fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" type="text/css" href="<?php echo $basePath; ?>components/fontawesome/css/font-awesome.min.css">

        <link rel="stylesheet" type="text/css" href="<?php echo $basePath; ?>css/index.css">

        <script type="text/javascript" src="<?php echo $basePath; ?>components/jquery/dist/jquery.min.js"></script>

        <script type="text/javascript" src="<?php echo $basePath; ?>js/dist/index.js"></script>

        <script type="text/javascript">
            /**
             * When all the website resources (Images, scripts) have been loaded.
             */
            $(window).load(
                function() {
                    app.setBasePath("<?php echo $basePath; ?>");

                    app.initialize();
                } // End of the function.
            );
        </script>

        <?php include_once("../ga-tracking.php") ?>
    </head>

    <body>
        <div id="menu-container">
            <label for="show-menu" class="show-menu">Show Menu</label>

            <input type="checkbox" id="show-menu" role="button">

            <ul id="menu">
                <li>
                    <a href="#">Home</a>
                </li>

                <li>
                    <a href="#">About &#65516;</a>
                </li>

                <li>
                    <a href="#">Portfolio &#65516;</a>
                </li>

                <li>
                    <a href="#">News</a>
                </li>
            </ul>
        </div>
    </body>
</html>
