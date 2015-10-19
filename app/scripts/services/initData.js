'use strict';

angular.module('stApp').factory('InitData',function(){

  var initData; 

    
return {
  setValue: function(value){
    initData = value;
  },
    
  getValue: function(){
    return initData;
  }

}; 
});
//
////app.factory('InitData', function($scope){
////var initPlayers;
////var initPoints;
////  initPlayers = $scope.players;
////  initPoints = $scope.points;
////  
////  return {
////    initPlayers: initPlayers,
////    initPoints: initPoints
////  };
////  
////}); 