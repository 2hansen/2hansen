#!/usr/bin/env bash
function install_nginx {
	echo "### Install nginx"
	sudo apt-get install -y nginx
	cp /vagrant/vagrant/default /etc/nginx/sites-enabled
	/etc/init.d/nginx restart	
}

function install_devtools {
	echo "### Install nodejs and dev tools"
	apt-get install -y nodejs-legacy npm git
	cd /vagrant
	npm install karma --save-dev
	npm install karma-jasmine --save-dev
	npm install -g karma-cli
	npm install phantomjs
	npm install -g bower
	su vagrant
	bower install --allow-root angular 
	bower install --allow-root bootstrap
	su
	cd
}

echo "### Bootstrappin'!"
sudo apt-get update
install_nginx
install_devtools

echo "### All done!"
