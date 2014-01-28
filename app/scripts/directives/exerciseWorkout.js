angular.module('introApp')
  .directive('exerciseWorkout', [function () {
    'use strict';
    return {
      templateUrl: 'views/partials/exercise-workout.html',
      restrict: 'A',
      controller: ['$scope', function ($scope) {
      }],
      link: function () {
      }
    };
  }]);
