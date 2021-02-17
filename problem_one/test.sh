#!/bin/bash

A=$(node main.js)
if [ "$A" = "440" ]; then echo "Pass"; else echo "Fail"; fi
