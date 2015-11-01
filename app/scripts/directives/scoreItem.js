'use strict';

angular.module('stapp').directive('scoreItem', function(){
  return {
    restrict:' E',
    templateUrl: 'scoreItem.html',
    controller: function(){},
    controllerAs: 'ScoreItemCtrl',
    link: function(scope,element,attr){
    }
  };
});