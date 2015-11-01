'use strict';


angular.module('stApp').controller('ScoreCtrl', function($scope, InitData, $compile){
   $scope.init = InitData.getValue();
   var parent = angular.element(document.querySelector('.score-elements-list')); 
   var elem = '<li><score-item></score-item></li>';
//  $compile(elem)($scope);
   var start = $scope.init.players;
   while(start > 0){
     parent.append($compile(elem)($scope));     
     start--;
   }

  
});

//
//angular.module('stApp').directive('scoreElement',function($compile){
//  return {
//    restrict: 'E',
//    transclude: true,
//    templateUrl: '../scripts/directives/scoreElement.html',
//    controller: function($scope, InitData){
//      $scope.start = InitData.getValue();
//      var parent = angular.element(document.querySelector('.score-elements-list')); 
//      var elem = '<li><div><button ng-click="addPoint()">+</button>'+$scope.start.points+'<button ng-click="subtractPoint()">-</button></div></li>';
//      var start = $scope.init.players;
//      while(start > 0){
//        parent.append(elem);
//        start--;
//      }  
//
//     $scope.addPoint = function(){
//        console.log('added');
//      }
//      $scope.subtractPoint = function(){
//        console.log('subtract');
//      }
//    },
//    controllerAs: 'scoreCtrl',
//    link: function(scope,element,attrs){
//       
//
//      element.addPoint = function(){
//        console.log('added');
//      }
//      element.subtractPoint = function(){
//        console.log('subtract');
//      }
//    }
//  
//  };
//});
//
