#!/bin/bash

# navigate to app folder
cd app

# initial startup by running react-script "start", name process "marketing"
# --watch watches and restarts if files change
npm start

# auto restart server if shut down
pm2 start

# freeze process list for automatic respawn
sudo systemctl enable pm2-ubuntu

pm2 save --force

# restart all processes - necessary to do this again?
pm2 startup
pm2 restart all