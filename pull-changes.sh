#!/usr/bin/env bash

printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****\n"
printf "List of files\n"
printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****\n"

printf "\n"

ls -al

printf "\n"

printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****\n"
printf "Local git version\n"
printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****\n"

printf "\n"

~/opt/usr/libexec/git-core/git --version

printf "\n"

printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****\n"
printf "Pull from repo result\n"
printf "***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****\n"

printf "\n"

~/opt/usr/libexec/git-core/git pull origin master