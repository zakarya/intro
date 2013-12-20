/**
* introApp Module
*
* Global SideTabs directive
*/
angular.module('introApp').directive('sideTab', ['ServiceSidetabs', function (ServiceSidetabs) {
  'use strict';
  return {
    restrict: 'A',
    scope: true,
    controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
      
    }]
  };
}]);