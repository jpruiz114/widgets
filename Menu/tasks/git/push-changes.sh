#!/usr/bin/env bash

git add .

if [ -z "$1" ]; then
	git commit -m "New commit - No comments provided"
else
	git commit -m "$1"
fi

git push origin master