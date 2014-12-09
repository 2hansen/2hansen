(function(){
	var app = angular.module('staff', []);


	app.directive('staffCard', function(){
		return {
			restrict: 'E',
			templateUrl: 'staff-card.html'
		};
	});

	app.service('staffService', ['$http', '$log', function($http, $log) {
		function all() {
			//$log.log('[PING] staffService');
	    	return $http({
	      		url: 'http://beta.json-generator.com/api/json/get/PzBlqvl',
	      		method: 'GET'
	    	});
	  	}
		return {
	    	all: all
	 	}
	}]); 

	app.controller('staffCtrl', ['$rootScope', '$http', '$log', function($rootScope, $http, $log) {
		/*$http.get('http://beta.json-generator.com/api/json/get/PzBlqvl').
			success(function(data, status, headers, config) {
				$rootScope.SOMEWHEREELSEemployees = data;
				//$log.log("Test 1 " + $rootScope.employees.length);
			}).
			error(function(data, status, headers, config) {
      			$log.log(data);
  			});*/

	}]);
})();