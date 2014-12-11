var staffControllers = angular.module('staffControllers', []);

staffControllers.controller('staffCtrl', ['$rootScope', '$http', '$log', function($rootScope, $http, $log) {
		/*$http.get('http://beta.json-generator.com/api/json/get/PzBlqvl').
			success(function(data, status, headers, config) {
				$rootScope.SOMEWHEREELSEemployees = data;
				//$log.log("Test 1 " + $rootScope.employees.length);
			}).
			error(function(data, status, headers, config) {
      			$log.log(data);
  			});*/

	}]);

staffControllers.controller("graphCtrl", ['$rootScope', '$scope', '$log', 'staffService', function($rootScope, $scope, $log, staffService){

		returnSeries = function(series){
			var employee;
			var count = 0;
			var staffData = [];
			var element;
			
	    	//$log.log($scope.employees.length);
		  	staffService.all().success(function (data) {
	    		var employees = data;
				for (employee in employees){
					if(employees[employee].isActive){
						var found = false;
						//$log.log("Looking for " + $scope.employees[employee].favoriteOs);
						for (element in staffData){
							
							if(staffData[element].key == employees[employee][series]){
								found = true;
								staffData[element].y++;
								//$log.log("Increment " + $scope.employees[employee].favoriteOs);
								break;
							}
						}
						if(found == false){
							staffData.push({key: employees[employee][series], y: 1});
							//$log.log("Add " + $scope.employees[employee].favoriteOs);
						}
					}
					
				}
			});	
			
				//$log.log(staffData + " " + series);
			return staffData;
		};

		returnEmployeeSeries = function(){
			$scope.employees = Employee.query();
		};

		$scope.options = {
	        chart: {
              	type: 'pieChart',
               	height: 500,
               	x: function(d){return d.key;},
               	y: function(d){return d.y;},
                showLabels: true,
                transitionDuration: 500,
               	labelThreshold: 0.01,
               	legend: {
                   	margin: {
                       	top: 5,
                       	right: 35,
                       	bottom: 5,
                       	left: 0
                   	}
               	}
           	}
        };

		$scope.dataSets = [
			{ name: "Favorite OS", data: returnSeries('favoriteOs') },
			{ name: "Favorite Pet", data: returnSeries('favoritePet') },
		    { name: 'Sex', data: returnSeries('sex') },
		    { name: 'Fulltime', data: returnSeries('fullTime') }, //Convert to percent
		    { name: 'Hours', data: returnSeries('hours') } 
	    ]

		$scope.data = $scope.dataSets[0].data; //Init	

		//$log.log("Test 2 " + $rootScope.employees.length);

	    $scope.chartTypes = [
	    	{name: 'Pie', value: 'pieChart'},
	    	{name: 'Bar', value: 'discreteBarChart'}
	    ];	

        //$log.log($scope.data);

	}]);



staffControllers.directive('staffCard', function(){
		return {
			restrict: 'E',
			templateUrl: 'staff-card.html'
		};
	});

staffControllers.service('staffService', ['$http', '$log', function($http, $log) {
		function all() {
			//$log.log('[PING] staffService');
	    	return $http({
	      		url: 'http://beta.json-generator.com/api/json/get/PzBlqvl',
	      		method: 'GET'
	    	});
	  	}
		return {
	    	all: all
	 	}
	}]); 

	
