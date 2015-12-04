<?php
// Remove the directory path we don't want
$request = str_replace("/frontend-test/BlogPost/", "", $_SERVER["REQUEST_URI"]);

// Split the path by "/"
$params = explode("/", $request);

$lang = "";

if (!empty($params)) {
    if (sizeof($params) >= 1) {
        $lang = $params[0];

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

        <title>Blog Post</title>

        <meta name="author" content="Jean Paul Ruiz">

        <meta name="description" content="This is an example of a blog post">

        <meta name="keywords" content="blog post, blog, post">

        <meta name="robots" content="index, follow">

        <meta name="revisit-after" content="7 days">

        <link href="//fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />

        <!-- PT Sans is a close match to the popular Myriad Pro -->
        <link href='//fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" type="text/css" href="components/fontawesome/css/font-awesome.min.css">

        <link rel="stylesheet" type="text/css" href="css/index.css">

        <script type="text/javascript" src="components/jquery/dist/jquery.min.js"></script>

        <script type="text/javascript" src="components/i18next/i18next.min.js"></script>

        <script type="text/javascript" src="js/dist/index.js"></script>

        <script type="text/javascript">
            /**
             * When all the website resources (Images, scripts) have been loaded.
             */
            $(window).load(
                function() {
                    var chosenLang = "<?php echo($lang); ?>";

                    var chosenId = "<?php echo($id); ?>";

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
                        <a class="langs-link" href="/frontend-test/BlogPost/en" id="go-to-en-page" target="_self" data-i18n="[title]blog-post.english-website;blog-post.english-website"></a>
                    </li>

                    <li class="langs-item">
                        <a class="langs-link" href="/frontend-test/BlogPost/es" id="go-to-es-page" target="_self" data-i18n="[title]blog-post.spanish-website;blog-post.spanish-website"></a>
                    </li>
                </ul>
            </div>

            <div id="post-container">
                <div id="post-picture">
                    <img alt="Post picture" src="./assets/images/post-images/post-image-1.jpg" />
                </div>

                <div id="post-author">
                    <div class="col" id="post-author-pic">
                        <div class="circle" style="background-image: url('assets/images/profile-pics/profile-pic-1.jpg')"></div>
                    </div>

                    <div class="col" id="post-author-data">
                        <label id="author-name">John Smith</label>

                        <p id="author-comment">Your talent amazes! This is awesome. Excited to see the final product.</p>
                    </div>
                </div>

                <div id="post-options">
                    <div class="post-option-column corner-option-column">
                        <div class="bottom-anchor toggle-anchor" id="follow-anchor" data-i18n="[title]blog-post.follow">
                            <i class="fa fa-eye"></i>

                            <label id="follow-label">172</label>
                        </div>
                    </div>

                    <div class="post-option-column central-option-column">
                        <div class="bottom-anchor" id="comment-anchor" data-i18n="[title]blog-post.comment">
                            <i class="fa fa-comment"></i>

                            <label id="comment-label">34</label>
                        </div>
                    </div>

                    <div class="post-option-column corner-option-column">
                        <div class="bottom-anchor toggle-anchor" id="like-anchor" data-i18n="[title]blog-post.like">
                            <i class="fa fa-heart"></i>

                            <label id="like-label">210</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
