'use strict';

angular.module('stApp').directive('scoreItem', function($timeout){

	return {
		restrict:' E',
		templateUrl: '../../views/scoreItem.html',
		requires: '^?ngModel',
		link: function(scope,element,attr,ngModel){
			scope.init.points <= 999 ? scope.initPoints = scope.init.points : scope.initPoints = 999;


			var inputBox = element.find('input');
			inputBox.bind('input',function(e){
				console.log(e.target);
				console.log(e.target.value);
				console.log(scope.initials);
			});


//			scope.$apply(function(){
//
//				ngModel.$setViewValue('feck');
//			});
//			console.log(ngModel);

		}
	};
});
