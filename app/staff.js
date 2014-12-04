(function(){
	var app = angular.module('staff', []);
	app.directive('staffCard', function(){
		return {
			restrict: 'E',
			templateUrl: 'staff-card.html'
		};
	});

	app.controller('staffCtrl', ['$rootScope', '$http', function($rootScope, $http) {
		$http.get('http://beta.json-generator.com/api/json/get/PzBlqvl').
			success(function(data, status, headers, config) {
				$rootScope.employees = data;
			}).
			error(function(data, status, headers, config) {
      			// log error
  			});
	}]);
})();