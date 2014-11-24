#!/usr/bin/env bash
function install_nginx {
	sudo apt-get install -y nginx
	cp /vagrant/vagrant/default /etc/nginx/sites-enabled
	/etc/init.d/nginx restart
}

function install_nodejs {
	apt-get install -y nodejs-legacy npm
}

sudo apt-get update
sudo apt-get install -y language-pack-en
install_nginx
install_nodejs
