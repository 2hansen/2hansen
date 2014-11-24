#!/usr/bin/env bash
function install_nginx {
	sudo apt-get install -y nginx
}

function install_nodejs {
	apt-get install -y nodejs-legacy npm
}

sudo apt-get update
install_nginx
install_nodejs
