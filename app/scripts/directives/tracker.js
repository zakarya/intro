'use strict';

angular.module('introApp')
  .directive('tracker', [function () {
    return {
      templateUrl: 'views/partials/tracker.html',
      restrict: 'A',
      controller: ['$scope', 'ExerciseService', 'WorkoutService', function ($scope, ExerciseService, WorkoutService) {

        function _getExercises() {
          return ExerciseService.findAll().then(function (data) {
            $scope.exercises = data;
          });
        }

        function _createWorkout() {
          WorkoutService.create($scope.workout).then(function (data){
            console.log(data);
          });
        }

        function _initialize() {
          //Setup scope variables
          $scope.getExercises = _getExercises;
          $scope.exercises = {};
          $scope.workout = {};
          $scope.createWorkout = _createWorkout;
          $scope.getExercises();
        }

        _initialize();
      }],
      link: function () {
      }
    };
  }]);
