#!/bin/bash

timeout 10 node basicServer.js &
echo "napping"
sleep 2
curl -vi localhost:8081
