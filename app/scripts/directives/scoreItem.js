'use strict';

angular.module('stApp').directive('scoreItem', function($timeout){

	return {
		restrict:' E',
		templateUrl: '../../views/scoreItem.html',
		requires: '^?ngModel',
		link: function(scope,element,attr,ngModel){
			scope.init.points <= 999 ? scope.initPoints = scope.init.points : scope.initPoints = 999;

			var initials = document.querySelectorAll('.si__initials'),
					list = document.querySelector('.score-elements-list');

			for (var i=0; i<initials.length; i++) {
				initials[i].textContent = i + 1;
			}
		}
	};
});
