<?php
$output = shell_exec("sh pull-changes.sh 2>&1");
echo($output);