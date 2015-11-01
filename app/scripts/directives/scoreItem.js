'use strict';

angular.module('stApp').directive('scoreItem', function(){
  return {
    restrict:' E',
    templateUrl: '/scripts/directives/scoreItem.html',
    transclude: true,
    controller: function(){
      console.log('is controll');
    },
    controllerAs: 'ScoreItemCtrl',
    link: function(scope,element,attr){
    }
  };
});