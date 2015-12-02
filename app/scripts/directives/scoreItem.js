'use strict';

angular.module('stApp').directive('scoreItem', function($timeout){

	return {
		restrict:' E',
		templateUrl: '/scripts/directives/scoreItem.html',
		transclude: true,
		link: function(scope,element,attr){
			scope.init.points <= 999 ? scope.initPoints = scope.init.points : scope.initPoints = 999;

			var addBtn = angular.element(document.querySelector('.add-point'));
			addBtn.bind('touchstart', function(event){
					var isHeld = false;
					// event.target.classList.contains('ng-click-active') ? alert('is held') : alert('is not held');
					// $timeout(function(){
					//  		isHeld = true;
					// 		console.log('hold', isHeld);
					//
					// },5000);
			});

			// addBtn.bind('touchend', function(event){
			// 		console.log( event.target);
			// 		var isHeld = false;
			// 		// $timeout.cancel();
			// 		alert('is not held');
			// });


			// scope.addPoint = function(event){
			// 	var isHeld = false;
			// 	console.log(event);
			// 	$timeout(function(){
			// 		isHeld = true;
			// 		console.log('hold', isHeld);
			// 	},5000);
			//
			//
			//
			//
			// 	var elem = event.target;
			// 	console.log(elem);
			// 	console.log(this,'this');
			// 	// var value = parseInt(elem.nextElementSibling.textContent);
			// 	// var target = elem.nextElementSibling;
			// 	// console.log(target, 'target');
			// 	// value = value +1;
			// 	// target.textContent = value;
			// };

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
