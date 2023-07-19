#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
apt install curl -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install nodejs -y
apt install -y npm
apt install nginx -y
ufw allow 'Nginx HTTP'