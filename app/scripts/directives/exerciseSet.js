angular.module('introApp')
  .directive('exerciseSet', [function () {
    'use strict';
    return {
      templateUrl: 'views/partials/exercise-set.html',
      restrict: 'A',
      controller: ['$scope', function ($scope) {
        console.log($scope.exercise);
      }],
      link: function () {
      }
    };
  }]);
