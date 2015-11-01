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
      scope.initPoints = scope.init.players;    
      element.bind('click', function(){
       
      });
       
      scope.addPoint = function(){
  
        var currentValue2 = element.next().text();
        angular.element(this).next().text(scope.currentValue+1);
      
        console.log(currentValue2); 
   
//        scope.initPoints += 1;
      };
    
    }
  };
});