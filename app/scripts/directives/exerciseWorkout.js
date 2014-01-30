angular.module('introApp')
  .directive('exerciseWorkout', [function () {
    'use strict';
    return {
      templateUrl: 'views/partials/exercise-workout.html',
      restrict: 'A',
      controller: ['$scope', function ($scope) {

        function _addSet() {
          console.log('adding');
          $scope.exercises.push({
            set: 0,
            reps: 0,
            goal: 0
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
