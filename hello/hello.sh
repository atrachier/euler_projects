#!/bin/bash

node ~/euler_projects/hello/basicServer.js &

echo "taking a nap"
sleep 2
curl localhost:8081

