#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
apt-get install curl -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install nodejs -y
apt install nginx -y
ufw allow 'Nginx HTTP'