'use strict';
/**
 * @ngdoc overview
 * @name stApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('stApp')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as form'
      })

      .when('/scoreKeeper', {
        templateUrl: 'views/scoreKeeper.html',
        controller: 'ScoreCtrl as score'
      })
      .otherwise({redirectTo: '/'});
  }]);
