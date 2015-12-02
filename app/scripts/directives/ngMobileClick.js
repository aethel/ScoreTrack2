angular.module('stApp').directive("ngMobileClick", function ($timeout) {

	return {
		restrict: 'A',
		link: function(scope, elem, attrs){
			// elem.bind("touchstart click", function (e) {
			//     e.preventDefault();
			//     e.stopPropagation();
			//     scope.$apply(attrs["ngMobileClick"]);
			// });

//			elem.bind('touchstart mousedown',function(e){
//				 alert('fe');
//				 e.preventDefault();
//				 e.stopPropagation();
//				 alert('fe2');
//				 scope.$apply(attrs["ngMobileClick"]);
//				 alert('fe3');
//			 });
			// var held = false;
			// console.log(held);
      var timer;
			elem.bind('mousedown',function(e){
				console.log(e.target);
				var targetBtn = e.target;

			timer = $timeout(function(){
					// held = true;
					// console.log(held,'down');
				}, 3000);
        timer.then(function(){addPoints(targetBtn,10)}, function(){addPoints(targetBtn,1)});
        // timer.then(
        //   function(){console.log('fired');},
        //   function(){console.log('rejecteddd');}
        // );
			 });

			elem.bind('mouseup',function(e){
				var targetBtn = e.target;
				// console.log(held, 'out');
        $timeout.cancel(timer);
        // held ? function(){return false}:addPoints(targetBtn,1);
        });


			var addPoints = function(targetBtn,valueAdded){
				var value = parseInt(targetBtn.nextElementSibling.textContent);
				var target = targetBtn.nextElementSibling;
				console.log(target, 'target');
				value = value + valueAdded;
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
