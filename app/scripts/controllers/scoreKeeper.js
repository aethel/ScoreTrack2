'use strict';


angular.module('stApp').controller('ScoreCtrl', function($scope, InitData, $compile){
   $scope.init = InitData.getValue();
   var parent = angular.element(document.querySelector('.score-elements-list'));
    var elem = '<li><score-item></score-item></li>';
    var start = $scope.init.players;
    while(start > 0){
      parent.append($compile(elem)($scope));
      start--;
    }
});
