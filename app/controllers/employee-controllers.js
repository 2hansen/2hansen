var employeeControllers = angular.module('employeeControllers', []);


employeeControllers.controller('employeeCtrl', ['$scope', '$routeParams', '$log', 'Employees', function($scope, $routeParams, $log, Employees) {
	$scope.employeeId = $routeParams.employeeId;	
	$scope.employees = Employees.query();
	$scope.employees.$promise.then(function(employees){
		for(var employee in employees){
			if(employees[employee]._id == $routeParams.employeeId){
				$scope.employee = employees[employee];	
				break;
			}
		}	
	});
}]);

/*var User = $resource('/user/:userId', {userId:'@id'});
User.get({userId:123})
    .$promise.then(function(user) {
      $scope.user = user;
    });*/


//The profileController
employeeControllers.controller('profileCtrl', ['$scope', '$log', function($scope, $log) {
	//$log.log($scope.employee.name.first);
	//$scope.employee = Employee.get();

}]);

//The skillController
employeeControllers.controller('skillCtrl', ['$scope', '$routeParams', '$log', 'Joke', 'Employees', function($scope, $routeParams, $log, Joke, Employees) {
/*	$scope.employees.$promise.then(function(employees){
		for(var employee in employees){
				if(employees[employee]._id == $routeParams.employeeId){
				$scope.joke = Joke.get({firstName: employees[employee].name.first, lastName: employees[employee].name.last}, function(joke) {
				    if(employees[employee].sex == 'female'){
						$scope.skills = unescape(joke.value.joke.replace(/ he /g, " she ").replace(/ his /g, " her ").replace(/ He /g, " She ").replace(/ him /g, " her ").replace(/ He'/g, " She'").replace(/he'/g, "she'").replace(/&quot;/g, "\""));
					}
					else{
						$scope.skills = joke.value.joke;
					}
				});
				break;
			}
		}
	});*/

	$scope.employees.$promise.then(function(employees){
		$scope.joke = Joke.get({firstName: $scope.employee.name.first, lastName: $scope.employee.name.last}, function(joke) {
		    if($scope.employee.sex == 'female'){
				$scope.skills = unescape(joke.value.joke.replace(/ he /g, " she ").replace(/ his /g, " her ").replace(/ He /g, " She ").replace(/ him /g, " her ").replace(/ He'/g, " She'").replace(/he'/g, "she'").replace(/&quot;/g, "\""));
			}
			else{
				$scope.skills = joke.value.joke;
			}
		});
	});
}]);