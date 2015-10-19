'use strict';

angular.module('stApp')
  .filter('reverse', function() {
    return function(items) {
      return angular.isArray(items)? items.slice().reverse() : [];
    };
  });
