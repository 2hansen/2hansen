'use strict';

var app = angular.module("staffApp", ['nvd3', 'ngRoute', 'staffControllers', 'staffServices'])

nv.dev = false;


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'staff.html'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);
	/*.run(function($rootScope){
		$rootScope.employees = [];
	})*/

