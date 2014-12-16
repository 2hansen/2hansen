var navControllers = angular.module('navControllers', []);

//The TabController
navControllers.controller('tabCtrl', function(){
    this.tab = 1;
    this.setTab = function(newValue){
      this.tab = newValue;
	};
    this.isSet = function(tabName){
      return this.tab === tabName;
    };
});