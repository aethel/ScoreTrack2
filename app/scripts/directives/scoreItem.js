'use strict';

angular.module('stApp').directive('scoreItem', function(){


	return {
		restrict:' E',
		templateUrl: '/scripts/directives/scoreItem.html',
		transclude: true,
		controller: function(){

		},
		controllerAs: 'ScoreItemCtrl',
		link: function(scope,element,attr){
			scope.init.points <= 999 ? scope.initPoints = scope.init.points : scope.initPoints = 999

			scope.addPoint = function(event){
				var elem = event.target;
				console.log(elem);
				var value = parseInt(elem.nextElementSibling.textContent);
				var target = elem.nextElementSibling;
				console.log(target, 'target');
				value = value +1;
				target.textContent = value;
			};

			scope.subtractPoint = function(event){
				var elem = event.target;
				console.log(elem);
				var value = parseInt(elem.previousElementSibling.textContent);
				var target = elem.previousElementSibling;
				console.log(target, 'target');
				value = value - 1;
				target.textContent = value;
			};


		}
	};
});
