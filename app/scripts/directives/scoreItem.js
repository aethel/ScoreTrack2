'use strict';

angular.module('stApp').directive('scoreItem', function($timeout){

	return {
		restrict:' E',
		templateUrl: '../../views/scoreItem.html',
		requires: '^?ngModel',
		link: function(scope,element,attr,ngModel){
			scope.init.points <= 999 ? scope.initPoints = scope.init.points : scope.initPoints = 999;

			var initials = document.querySelectorAll('.si__initials');
			console.log(initials[0].textContent.length);

		}
	};
});
