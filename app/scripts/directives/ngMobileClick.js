angular.module('StApp'.directive('ngMobileClick', function(){
  return {
    restrict: 'A',
    link: function(scope,element,attrs){
      element.bind('touchstart', function(event){
        event.preventDefault();
        event.stopPropagation();

        scope.$apply(attrs["ngMobileClick"]);
      });
    }
  }
});
// And use like: ng-mobile-click="myScopeFunction()"
