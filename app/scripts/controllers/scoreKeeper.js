'use strict';


angular.module('stApp').controller('ScoreCtrl', function($scope, InitData, $compile){
	 $scope.init = InitData.getValue();

	 $scope.instructionsNeeded = true;
	 localStorage.getItem('secondLoad') ? (function(){
		 $scope.instructionsNeeded = false;
	 })() : (function(){
		 localStorage.setItem('secondLoad',true);

	 })();


	 var parent = angular.element(document.querySelector('.score-elements-list'));
		var elem = '<li><score-item></score-item></li>';
		var start = $scope.init.players;
		$scope.init.players <= 8 ? start = $scope.init.players : start = 8;
		while(start > 0){
			parent.append($compile(elem)($scope));
			start--;
		}
});
