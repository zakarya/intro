angular.module('introApp')
  .directive('exercise', ['ExerciseService', function (ExerciseService) {
    'use strict';
    return {
      restrict: 'A',
      scope: true,
      controller: ['$scope', '$element', function ($scope) {

        function _getExercises() {
          ExerciseService.findAll().then( function (data) {
            console.log(data);
          });
        }

        function _initialize() {
          $scope.exercises = [];
          $scope.getExercises = _getExercises;
          $scope.getExercises();
        }

        _initialize();
      }],
      link: function () {
      }
    };
  }]);
