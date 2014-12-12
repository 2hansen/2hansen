var staffControllers = angular.module('staffControllers', []);

//The TabController
staffControllers.controller('tabCtrl', function(){
    this.tab = 2;
    this.setTab = function(newValue){
      this.tab = newValue;
	};
    this.isSet = function(tabName){
      return this.tab === tabName;
    };
});


//The ListController
staffControllers.controller('listCtrl', ['$rootScope', '$http', '$log', '$scope', 'Employee', function($rootScope, $http, $log, $scope, Employee) {

	$scope.employees = Employee.query();	

}]);

//The ChartController
staffControllers.controller("chartCtrl", ['$rootScope', '$scope', '$log', 'Employee', function($rootScope, $scope, $log, Employee){

	//Promise the employees
	$scope.employees = Employee.query();

	//Basic options for Chart
	$scope.options = {
    	chart: {
       		height: 500,
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

    //Define available graphs
    $scope.charts = [
    	{name: 'Favorite OS', series: {name: 'favoriteOs', type: 'simplePie'}},
    	{name: 'Sex', series: {name: 'sex', type: "simpleDonut"}},
    	{name: 'Fulltime', series: {name: 'fullTime', type: "simplePie"}},
		{name: 'Hours', series: {name: 'hours', type: "simpleLine"}},
		{name: 'Favorite Pet', series: {name: 'favoritePet', type: "simplePie"}}

    ];

	function setSimplePieData(series){
		var staffData = [];
		var employees = $scope.employees;
		employees.$promise.then(function (employees){ //process when ready
			for (var employee in employees){
				if(employees[employee].isActive){
					var found = false;
					//$log.log("Looking for " + series);
					for (var element in staffData){	
						if(staffData[element].key == employees[employee][series.name]){
							found = true;
							staffData[element].y++;
							//$log.log("Increment " + employees[employee][series]);
							break;
						}
					}
					if(!found){
						staffData.push({key: employees[employee][series.name], y: 1});
						//$log.log("Add " + employees[employee][series]);
					}
				}
			}
		});
		return staffData;
	};

	function setSimpleLineData(series){
		var staffData = [];
		var employees = $scope.employees;
		employees.$promise.then(function (employees){ //process when ready
			for (var employee in employees){
				if(employees[employee].isActive){
					var found = false;
					//$log.log("Looking for " + series);
					for (var element in staffData){	
						if(staffData[element].values == employees[employee][series.name]){
							found = true;
							staffData[element].values.y++;
							//$log.log("Increment " + employees[employee][series]);
							break;
						}
					}
					if(!found){
						staffData.push(
							{
								key: "series",
								values: {
									x: employees[employee][series.name],
									y: 1
								}
							}
						);
						$log.log("Add " + employees[employee][series.name]);
					}
				}
			}
		});
		return staffData;
	};


	//Accepts series.name and series.type
	//Returns dataset in accordance with nv3d and series.type
   	function drawChart(series){ 
		switch(series.type){
			case 'simpleDonut':
					$scope.options.chart.donut = true;
					$scope.options.chart.type ='pieChart';
					$scope.options.chart.showLabels = false;
					$scope.options.chart.x = function(d){return d.key;};
       				$scope.options.chart.y = function(d){return d.y;};
					return setSimplePieData(series);
			case 'simplePie':
					$scope.options.chart.donut = false;	
					$scope.options.chart.type = 'pieChart';
					$scope.options.chart.showLabels = true;
					$scope.options.chart.x = function(d){return d.key;};
       				$scope.options.chart.y = function(d){return d.y;};
					return setSimplePieData(series);
			case 'simpleLine':
					$scope.options.chart.type = 'lineChart';
					$scope.options.chart.x = function(d){return d.x;};
       				$scope.options.chart.y = function(d){return d.y;};
       				//$scope.options.chart.xAxis.axisLabel = "X";
       				//$scope.options.chart.yAxis.axisLabel = "Y";
					return setSimpleLineData(series);
		}
	};

	$scope.selectChart = function(){
		//$log.log("1. " + $scope.selectedChart);
		$scope.data = drawChart($scope.selectedChart);
	}

	 //init first graph
    $scope.selectedChart = $scope.charts[0].series;
    $scope.selectChart();
}]);



staffControllers.directive('staffCard', function(){
		return {
			restrict: 'E',
			templateUrl: 'staff-card.html'
		};
});


	