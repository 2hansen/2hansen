var employeeControllers = angular.module('employeeControllers', []);


employeeControllers.controller('employeeCtrl', ['$scope', '$routeParams', 'Employees', function($scope, $routeParams, Employees) {
	$scope.employeeId = $routeParams.employeeId;
	$scope.employees = Employees.query();
}]);

//The profileController
employeeControllers.controller('profileCtrl', ['$scope', function($scope) {

}]);

//The skillController
employeeControllers.controller('skillCtrl', ['$scope', 'Joke', function($scope, Joke) {
	$scope.joke = Joke.query();
}]);