#!/bin/bash
LOG=/sdcard/node-demo/node.log
{
  cd /sdcard/node-demo || exit 1
  echo "== git repo test"
  rm -rf .git
  git init -q . && git add app.js && git -c user.name=mvs -c user.email=mvs@tablet commit -q -m "first commit from the tablet" && git log --oneline
  echo "== installing nodejs"
  pkg install -y nodejs 2>&1 | grep -E "^(Get:|Setting up nodejs|E:|W:)" | tail -4
  echo "node: $(node -v)  npm: $(npm -v)"
  echo "== running app.js"
  node app.js
  echo "node exit=$?"
} 2>&1 | tee "$LOG"
