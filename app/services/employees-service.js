var employeesService = angular.module('employeesService', ['ngResource']);

employeesService.factory('Employees', ['$resource', function($resource){
    return $resource('http://beta.json-generator.com/api/json/get/PzBlqvl', {}, {
      query: {method:'GET', /*params:{phoneId:'phones'},*/ isArray:true}
    });
  }]);
