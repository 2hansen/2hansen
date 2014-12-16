var employeeServices = angular.module('employeeServices', ['ngResource']);

employeeServices.factory('Employee', ['$resource',
  function($resource){
    return $resource('http://beta.json-generator.com/api/json/get/PzBlqvl', {}, {
      query: {method:'GET', /*params:{phoneId:'phones'},*/ isArray:true}
    });
  }]);