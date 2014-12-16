'use strict';

var app = angular.module("ITKApp", [
	'nvd3', 
	'ngRoute', 
	'navControllers', 
	'employeeControllers', 
	'employeesControllers',
	'employeeServices'
])

nv.dev = false;


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/employees', {
			templateUrl: 'templates/employees.html',
		}).
		when('/employee/:employeeId',{
			templateUrl: 'templates/employee.html'
		}).
		otherwise({
			redirectTo: '/employees'
		});
}]);
	/*.run(function($rootScope){
		$rootScope.employees = [];
	})*/

