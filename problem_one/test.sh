#!/bin/bash

A=$(node main.js)
if [ "$A" = "440" ]; then echo "Pass"; else echo "Fail"; fi
./node_modules/.bin/eslint main.js
./node_modules/.bin/eslint algorithm.js
