#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install nodejs -y
apt-get install npm -y
apt install nginx
ufw allow 'Nginx HTTP'