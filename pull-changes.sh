#!/usr/bin/env bash

printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****<br>"
printf "List of files<br>"
printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****<br>"

printf "<br>"

ls -al

printf "<br>"

printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****<br>"
printf "Local git version<br>"
printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****<br>"

printf "<br>"

~/opt/usr/libexec/git-core/git --version

printf "<br>"

printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****<br>"
printf "Pull from repo result<br>"
printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****<br>"

printf "<br>"

~/opt/usr/libexec/git-core/git pull origin master