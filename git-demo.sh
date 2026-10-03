#!/bin/bash
git config --global --add safe.directory '*'
cd /sdcard/node-demo && rm -rf .git
git init -q . && git add app.js && git -c user.name=mvs -c user.email=mvs@tablet commit -q -m "first commit from the tablet"
git log --oneline --stat | head -5
echo "-- edit and diff --"
echo "// edited on the tablet" >> app.js
git status --short && git diff --stat
echo "== git demo done"
