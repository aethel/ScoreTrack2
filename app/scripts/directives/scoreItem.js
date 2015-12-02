'use strict';

angular.module('stApp').directive('scoreItem', function($timeout){

	return {
		restrict:' E',
		templateUrl: '../../views/scoreItem.html',
		transclude: true,
		link: function(scope,element,attr){
			scope.init.points <= 999 ? scope.initPoints = scope.init.points : scope.initPoints = 999;
		}
	};
});
