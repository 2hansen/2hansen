(function(){
	var app = angular.module("graph", []);
	app.controller("graphCtrl", ['$rootScope', '$scope', '$log', 'staffService', function($rootScope, $scope, $log, staffService){

		returnSeries = function(series){
			var employee;
			var count = 0;
			var staffData = [];
			var element;

			staffService.all().success(function (data) {
    			$scope.employees = data;
    			//$log.log($scope.employees.length);
    			// init further handling of `.data` here.
	  	
				for (employee in $scope.employees){
					if($scope.employees[employee].isActive){
						var found = false;
						//$log.log("Looking for " + $scope.employees[employee].favoriteOs);
						for (element in staffData){
							
							if(staffData[element].key == $scope.employees[employee][series]){
								found = true;
								staffData[element].y++;
								//$log.log("Increment " + $scope.employees[employee].favoriteOs);
								break;
							}
						}
						if(found == false){
							staffData.push({key: $scope.employees[employee][series], y: 1});
							//$log.log("Add " + $scope.employees[employee].favoriteOs);
						}
					}
					
				}
				//$log.log(staffData + " " + series);
			});
			return staffData;
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
			{
				name: "Favorite OS", 
				data: returnSeries('favoriteOs')
			},
			{
				name: "Favorite Pet", 
				data: returnSeries('favoritePet')
		    },
		    {
		    	name: 'Sex',
		    	data: returnSeries('sex')
		    }	
	    ]

		$scope.data = $scope.dataSets[0].data; //Init	

		//$log.log("Test 2 " + $rootScope.employees.length);

	    $scope.chartTypes = [
	    	{name: 'Pie', value: 'pieChart'},
	    	{name: 'Bar', value: 'discreteBarChart'}
	    ];	

        //$log.log($scope.data);

	}]);
})();