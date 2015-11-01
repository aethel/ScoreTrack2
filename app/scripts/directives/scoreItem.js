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
      scope.initPoints = scope.init.points;    
      element.bind('click', function(){
       
      });
       
      scope.addPoint = function(event){
        
        var elem = event.target;
        var value = parseInt(elem.nextElementSibling.textContent);
        
        value += 1;

   
//        scope.initPoints += 1;
      };
    
    }
  };
});