var employeeControllers = angular.module('employeeControllers', []);


//The ListController
employeeControllers.controller('profileCtrl', ['$rootScope', '$routeParams', '$http', '$log', '$scope', 'Employee', function($rootScope, $routeParams, $http, $log, $scope, Employee) {

	$scope.employeeId = $routeParams.employeeId;
	$scope.employees = Employee.query();

}]);