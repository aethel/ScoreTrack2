'use strict';


angular.module('stApp').controller('ScoreCtrl', function($scope, InitData, $compile){
	$scope.init = InitData.getValue();

	$scope.instructionsNeeded = true;
	localStorage.getItem('secondLoad') ? (function(){
		$scope.instructionsNeeded = false;
	})() : (function(){
		localStorage.setItem('secondLoad',true);
	})();

	$scope.toggleVisibility = function(){
		$scope.instructionsNeeded ? $scope.instructionsNeeded = false : $scope.instructionsNeeded = true;
	}

	var parent = angular.element(document.querySelector('.score-elements-list'));
	var elem = '<li class="sl__list-item"><score-item></score-item></li>';
	var start = $scope.init.players;
	$scope.init.players <= 8 ? start = $scope.init.players : start = 8;


	while(start > 0){
		parent.append($compile(elem)($scope));
		start--;
	};

	$scope.confirmReset = function($event){
		console.log($event,$event.currentTarget);
		if(!confirm('Definitely reset?')) {
			console.log('resetting');
			$event.preventDefault();
		} else {
			return true;
		}
	}
});
