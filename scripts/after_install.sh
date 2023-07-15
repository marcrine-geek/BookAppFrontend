#!/bin/bash

# navigate to app folder
cd /BookAppFrontend

# install dependencies
npm install

# install create-react-app and react-scripts
# without react-scripts application cannot be started
npm install --save create-react-app react-scripts

# install pm2 process manager
npm install pm2 -g
