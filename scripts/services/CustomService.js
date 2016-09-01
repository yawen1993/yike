
var CustomService = angular.module('CustomService', []);

CustomService.factory('formact', function() {
	return function (input) {
		// console.log(input);
		var s = '';
		for(var key in input) {
			s += key + '=' + input[key] + '&'
		}

		return s.slice(0, -1);
	};
})