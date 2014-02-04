angular.module('introApp')
  .directive('exerciseWorkout', [function () {
    'use strict';
    return {
      templateUrl: 'views/partials/exercise-workout.html',
      restrict: 'A',
      controller: ['$scope', function ($scope) {

        function _addSet() {
          $scope.exercise.sets.push({
            reps: null,
            goal: null
          });
        }

        function _init() {
          $scope.addSet = _addSet;
        }
        _init();
      }],
      link: function () {
      }
    };
  }]);
