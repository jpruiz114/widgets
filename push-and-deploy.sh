#!/usr/bin/env bash

# Wait for 3 seconds
ping 127.0.0.1 -n 3 > nul

# Add all the files
git add .

# Add a comment
git commit -m "Generic comment"

# Push the changes
git push origin master