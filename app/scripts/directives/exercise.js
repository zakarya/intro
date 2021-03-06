angular.module('introApp')
  .directive('exercise', ['ExerciseService', function (ExerciseService) {
    'use strict';
    return {
      restrict: 'A',
      scope: true,
      controller: ['$scope', '$element', function ($scope) {

        function _getExercises() {
          ExerciseService.findAll().then( function () {
          });
        }

        function _init() {
          $scope.exercises = [];
          $scope.getExercises = _getExercises;
          $scope.getExercises();
        }

        _init();
      }],
      link: function () {
      }
    };
  }]);
