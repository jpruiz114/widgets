<?php
$output = shell_exec("sh pull-changes.sh 2>&1");
$output = str_replace("\n", "<br>", $output);
echo($output);