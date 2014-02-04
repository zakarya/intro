angular.module('introApp')
  .directive('exerciseSet', [function () {
    'use strict';
    return {
      templateUrl: 'views/partials/exercise-set.html',
      restrict: 'A',
      controller: ['$scope', function ($scope) {

        function _init() {
        }
        _init();
      }],
      link: function () {
      }
    };
  }]);
