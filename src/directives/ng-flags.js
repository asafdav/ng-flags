/**
 * ng-flags module
 * Turns country ISO code to flag thumbnail.
 *
 * Author: asafdav - https://github.com/asafdav
 */
angular.module('ngFlag', []).
  directive('flag', ['$parse', function($parse) {
    return {
      template: '<span class="{{ flagSize }}"><span class="flag {{ country }}"></span></span>',
      replace: true,
      link: function(scope, elm, attrs) {
        // Default flag size
        scope.flagSize = 'f16';

        attrs.$observe('flag', function(value) {
          scope.country = scope.$eval(value).toLowerCase();
        });

        attrs.$observe('flagSize', function(value) {
          scope.flagSize = value;
        });
      }
    };
  }]);
