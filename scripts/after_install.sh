#!/bin/bash

# navigate to app folder
cd /app

# install dependencies
npm install

# install create-react-app and react-scripts
# without react-scripts application cannot be started
npm install -g create-react-app

# install pm2 process manager
npm install pm2 -g
