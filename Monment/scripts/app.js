
// 定义模块
var Yike = angular.module('Yike', ['ngRoute', 'Nav']);

Yike.run(['$rootScope', function ($rootScope) {

	$rootScope.toggled = false;

	// 在全局下添加事件
	$rootScope.toggle = function () {
		// 
		$rootScope.toggled = !$rootScope.toggled;

		var navs = document.querySelectorAll('.navs dd');

		if($rootScope.toggled) {
			// 打开
			for(var i=0; i<navs.length; i++) {

				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				navs[i].style.transitionProperty = 'all';
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transitionTimingFunction = 'ease-out';
				navs[i].style.transform = 'translate(0)';
			}
		} else {

			// 收起
			for(var i=navs.length - 1; i>=0; i--) {
				navs[i].style.transitionDuration = (navs.length - i + 1) * 0.05 + 's';
				navs[i].style.transitionProperty = 'all';
				navs[i].style.transitionDelay = '';
				navs[i].style.transitionTimingFunction = 'ease-out';
				navs[i].style.transform = 'translate(-100%)';
			}
		}

	}

}]);