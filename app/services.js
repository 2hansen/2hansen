var staffServices = angular.module('staffServices', ['ngResource']);

staffServices.factory('Employee', ['$resource',
  function($resource){
    return $resource('http://beta.json-generator.com/api/json/get/PzBlqvl', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);