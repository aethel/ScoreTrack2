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

			list.addEventListener('click', function(e){
				if(e.target != e.currentTarget && e.target.classList.contains('si__initials')){
					console.log(e.target, e.target.classList);
				} else {
					console.log(e.currentTarget);
				}


			},false);


		}
	};
});
