'use strict';

angular.module('stApp').directive('scoreItem', function($timeout){

	return {
		restrict:' E',
		templateUrl: '../../views/scoreItem.html',
		requires: '^?ngModel',
		link: function(scope,element,attr,ngModel){
			scope.init.points <= 999 ? scope.initPoints = scope.init.points : scope.initPoints = 999;

//			var initials = document.querySelectorAll('.si__initials'),
			var initials = document.querySelectorAll('.si__initials-wrapper'),
					list = document.querySelector('.score-elements-list');

//			for(var i=0;i<initials.length;i++){
//				initials[i].textContent = i+1
//			}
			for(var i=0;i<initials.length;i++){
				initials[i].addEventListener('click',function($event){
						$event.currentTarget.textContent = '';
						$event.currentTarget.setAttribute('contenteditable','true');
				},false);

				initials[i].addEventListener('input',function($event){
					var text = $event.currentTarget.textContent;
					if(text.length >= 1) {
						text = text.slice(0,1);
						$event.currentTarget.setAttribute('contenteditable','false');
					}
				},false);
			}


		}
	};
});
