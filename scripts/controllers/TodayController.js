
var Today = angular.module('Today', []);

Today.controller('TodayController', ['$scope', '$http', function($scope, $http) {

	// 
	$http({
		method: 'get',
		url: './api/today.php'
	}).success(function (data) {
		console.log(data);

		$scope.date = data.date;
		// 数据
		$scope.posts = data.posts;
	});

}])