<?php
$basePath = "/frontend-test/Menu/";

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
