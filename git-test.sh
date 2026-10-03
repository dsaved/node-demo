#!/bin/bash
LOG=/sdcard/node-demo/apt.log
{
  echo "== whoami: $(id -u) PREFIX=$PREFIX"
  echo "== apt-get install"
  apt-get install -y git
  echo "== apt-get exit=$?"
  echo "== dpkg audit"; dpkg --audit; echo "dpkg exit=$?"
  echo "== git"; git --version; echo "git exit=$?"
} 2>&1 | tee "$LOG"
