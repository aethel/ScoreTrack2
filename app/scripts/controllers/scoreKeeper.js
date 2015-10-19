'use strict';


angular.module('stApp').controller('ScoreCtrl', function($scope, InitData){
   $scope.init = InitData.getValue();
  
});


angular.module('stApp').directive('scoreElement',function($compile){
  return {
    restrict: 'E',
    templateUrl: '../scripts/directives/scoreElement.html',
    controller: function($scope, InitData){
      $scope.start = InitData.getValue();
      var parent = angular.element(document.querySelector('.score-elements-list')); 
      var elem = '<li><div><button>+</button>'+$scope.start.points+'<button>-</button></div></li>';
      var start = $scope.init.players;
      while(start > 0){
        console.log(start);
        parent.append(elem);
        start--;

      }  
    },
    controllerAs: 'scoreCtrl',
    link: function(scope,element,attrs){

    }
  
  };
});

