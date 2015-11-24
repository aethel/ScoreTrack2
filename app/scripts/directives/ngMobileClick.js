angular.module('stApp').directive("ngMobileClick", function () {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs){
      // elem.bind("touchstart click", function (e) {
      //     e.preventDefault();
      //     e.stopPropagation();
      //     scope.$apply(attrs["ngMobileClick"]);
      // });

      elem.bind('touchstart click ',function(e){
         alert('fe');
         e.preventDefault();
         e.stopPropagation();
         alert('fe2');
         scope.$apply(attrs["ngMobileClick"]);
         alert('fe3');
       });
      console.log(elem,scope);
    }
  }
});
// And use like: ng-mobile-click="myScopeFunction()"
