

var Older = angular.module('Older', ['CustomService']);

Older.controller('OlderController', ['$scope', '$http', 'formact', function($scope, $http, formact) {
	
	// 
	$http({
		method: 'post',
		url: './api/older.php',
		data: formact({today: '2016-08-29'}),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).success(function (data) {
		console.log(data);

		$scope.date = data.date;

		$scope.posts = data.posts;
	});
}])