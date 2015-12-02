angular.module('stApp').directive("ngMobileClick", function ($timeout,$interval) {

	return {
		restrict: 'A',
		link: function(scope, elem, attrs){

			var timer,
					interval;

			elem.bind('mousedown touchstart',function(e){
				var targetBtn = e.target;
				timer = $timeout(function(){
				}, 2000);
				console.log(e.target.classList.contains("js-add-point"));

				e.target.classList.contains("js-add-point") ?
						function(){
										console.log('fd')
						timer.then(function(){
							interval = $interval(function(){addPoints(targetBtn,10)	},500);
						}, function(){
							addPoints(targetBtn,1);
						});
						}()
				:
					function(){
						console.log('fddsd');
						timer.then(function(){
							interval = $interval(function(){subtractPoints(targetBtn,10)	},500);
						}, function(){
							subtractPoints(targetBtn,1);
						});
				}();


//
//				timer.then(function(){
//					interval = $interval(function(){addPoints(targetBtn,10)	},500);
//				}, function(){
//					addPoints(targetBtn,1)
//				});
			 });

			elem.bind('mouseup touchend',function(e){
				var targetBtn = e.target;
				// console.log(held, 'out');
				$timeout.cancel(timer);
				$interval.cancel(interval);
				// held ? function(){return false}:addPoints(targetBtn,1);
				});



			var addPoints = function(targetBtn,valueAdded){
				var value = parseInt(targetBtn.nextElementSibling.textContent);
				var target = targetBtn.nextElementSibling;
				value = value + valueAdded;
				target.textContent = value;
			}

			var subtractPoints = function(targetBtn,valueAdded){
				var value = parseInt(targetBtn.previousElementSibling.textContent);
				var target = targetBtn.previousElementSibling;
				value = value - valueAdded;
				target.textContent = value;
			}

////
//			 elem.bind('touchend mouseup',function(e){
//				 alert('feend');
//				 e.preventDefault();
//				 e.stopPropagation();
//				 alert('feend2');
//				 scope.$apply(attrs["ngMobileClick"]);
//				 alert('feennn3');
//			 });
//			console.log(elem,scope);
		}
	}
});
// And use like: ng-mobile-click="myScopeFunction()"
