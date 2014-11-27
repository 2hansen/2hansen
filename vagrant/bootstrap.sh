#!/usr/bin/env bash
function install_nginx {
	echo "### Install nginx"
	apt-get install -y nginx
	cp /vagrant/vagrant/default /etc/nginx/sites-enabled
	/etc/init.d/nginx restart
}

function install_npm {
	echo "### Install nodejs and more"
	apt-get install -y nodejs-legacy npm git
	cd /vagrant
	npm install express
	npm install -g bower
	cd
}

function install_bower {
	echo "### Install bower packages"
	cd /vagrant/vagrant
	bower install --allow-root
	cd
}

echo "### Bootstrappin'!"
sudo apt-get update
install_nginx
install_npm
install_bower
sudo apt-get upgrade -y
echo "### All done!"
