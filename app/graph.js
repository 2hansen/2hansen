(function(){
	var app = angular.module("graph", []);
	app.controller("graphCtrl", ['$rootScope', '$scope', function($rootScope, $scope){
		$scope.chartType = "pie";


		$scope.config = {
			labels: false,
			title: "Products",
			legend: {
				display: true,
				position: 'left'
			},
			innerRadius: 0
		};

		$scope.relevantSeries = ['sex', 'age', 'fullTime', 'favoritePet', 'favoriteOs'];


		$scope.data = {
			series: ['Sales', 'Income', '<i>Expense</i>', 'Laptops', 'Keyboards'],
			data: [{
				x: "Sales",
				y: [100, 500, 0],
				tooltip: "this is tooltip"
			}, {
				x: "Not Sales",
				y: [300, 100, 100]
			}, {
				x: "Tax",
				y: [351]
			}, {
				x: "Not Tax",
				y: [54, 0, 879]
			}]
		};

	}]);
})();