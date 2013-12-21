'use strict';

angular.module('introApp')
  .directive('tracker', [function () {
    return {
      templateUrl: 'views/partials/tracker.html',
      restrict: 'A',
      controller: ['$scope', 'ExerciseService', function ($scope, ExerciseService) {

        function _getExercises() {
          return ExerciseService.findAll().then(function (data) {
            $scope.exercises = data;
            console.log(data);
          });
        }

        function _initialize() {
          //Setup scope variables
          $scope.getExercises = _getExercises;
          $scope.exercises = {};

          $scope.getExercises();
        }

        _initialize();
      }],
      link: function () {
      }
    };
  }]);
