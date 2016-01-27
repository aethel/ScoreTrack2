'use strict';

angular.module('stApp').directive('scoreItem', function($timeout){

	return {
		restrict:' E',
		templateUrl: '../../views/scoreItem.html',
		requires: '^?ngModel',
		link: function(scope,element,attr,ngModel){
			scope.init.points <= 999 ? scope.initPoints = scope.init.points : scope.initPoints = 999;

//			var items = document.querySelectorAll('score-item');
//			console.log(items.length);
//			for(var i=0; i<items.length; i++){
//				var item = items[i];
//				var initialsBox = item.querySelector('.si__initials');
//				console.log(initialsBox,'initbox');
//				var content =+ i;
//
//				initialsBox.textContent = content;
//			}


		}
	};
});
