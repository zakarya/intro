/**
* introApp Module
*
* Global SideTabs directive
*/
angular.module('introApp').directive('sideTabs', [function () {
  'use strict';
  return {
    restrict: 'A',
    templateUrl: '/views/partials/sidetabs.html',
    scope: true,
    transclude: true,
    controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
      function _setActiveSidetab(tab) {
        $rootScope.activeSidetab = tab;
      }

      function _initialize() {
        //Setup scope variables
        $scope.setActiveSidetab = _setActiveSidetab;
      }

      _initialize();
    }]
  };
}]);