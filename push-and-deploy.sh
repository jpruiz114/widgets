#!/usr/bin/env bash

# Validate and build the assets for the Blog Post
cd BlogPost
grunt
cd ..

# Validate and build the assets for the Contact Form
cd ContactForm
grunt
cd ..

# Wait for 3 seconds
ping 127.0.0.1 -n 3 > nul

# Add all the files
git add .

# Add a comment
git commit -m "Automatic build, validation and commit done by shell script"

# Push the changes
git push origin master
