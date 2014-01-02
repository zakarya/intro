'use strict';

angular.module('introApp')
  .directive('exercises', [function () {
    return {
      templateUrl: 'views/partials/exercises.html',
      restrict: 'A',
      controller: ['$scope', 'ExerciseService', function ($scope, ExerciseService) {

        function _createExercise () {
          ExerciseService.create($scope.exercise).then(function (data) {
            $scope.exercises.unshift(data);
          });
        }

        function _initialize() {
          //Setup Scope Variables
          $scope.exercise = {};
          $scope.createExercise = _createExercise;
        }

        _initialize();
      }],
      link: function () {
      }
    };
  }]);
