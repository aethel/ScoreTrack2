angular.module('stApp').directive("ngMobileClick", [function () {
  var myScopeFunction = function(){
    alert('gr');
  };

    return function (scope, elem, attrs) {
        elem.bind("touchstart click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            scope.$apply(attrs["ngMobileClick"]);
            var myScopeFunction = function(){
              alert('gr3');
            };
        });
    };
}]);
// And use like: ng-mobile-click="myScopeFunction()"
