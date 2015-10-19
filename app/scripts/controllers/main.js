'use strict';

/**
 * @ngdoc function
 * @name stApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stApp
 */
angular.module('stApp')
  .controller('MainCtrl', function ($scope, InitData) {
  var player = $scope.player;
  var points = $scope.points;
  
  
 $scope.init = {};
 
 $scope.updatePoints = function(points){
   $scope.init.points = points;
    console.log($scope.init);
 };
  
 $scope.updatePlayers = function(players){
   $scope.init.players = players;
      console.log($scope.init);
 };
  

 $scope.pushObject = function(){
    InitData.setValue($scope.init);
 };
 
  
//  InitData.setValue($scope.player);
//  InitData.setValue($scope.points);
//$scope.kak = InitData.getValue();
  
  
  });
