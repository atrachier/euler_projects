#!/bin/bash

A=$(node main.js)
if [ "$A" = "440" ]; then echo "Math Passes"; else echo "Math Fails"; fi
if ./node_modules/.bin/eslint main.js; then echo "Main Lints"; else "Main Fails Lint"; fi
if ./node_modules/.bin/eslint algorithm.js; then echo "Algorithm Lints"; else "Algorithm Fails Lint"; fi
