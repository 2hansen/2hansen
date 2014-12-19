var jokeService = angular.module('jokeService', ['ngResource']);

jokeService.factory('Joke', ['$resource',
  function($resource){
    return $resource('http://api.icndb.com/jokes/random/?firstName=:firstName&lastName=:lastName', {}, {
      query: {method:'GET', params:{firstName:'Chuck', lastName:'Norris'}, isArray:false}
    });
  }]);
//Use the following to match names :)
//http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe