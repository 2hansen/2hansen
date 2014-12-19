var employeesService = angular.module('employeesService', ['ngResource']);

employeesService.factory('Employees', ['$resource', function($resource){
    return $resource('http://beta.json-generator.com/api/json/get/PzBlqvl', {}, {
      query: {method:'GET', /*params:{phoneId:'phones'},*/ isArray:true}
    });
  }]);

employeesService.factory('Employee', ['Employees', function(Employees){
	//var theEmployee = {};
	var employees = Employees.query();
	
	return{
		get: function(){
			var emp;
			employees.$promise.then(function(employees){
				for(var employee in employees){
					if(employees[employee]._id == '5492d60344fcd945f4df63c1'){
						emp = employees[employee]		
						break;
					}
				}
				return emp;	
			});
		},
		set: function(){

		}
	}
}]);

