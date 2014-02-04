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

        function _addExercise() {
          $scope.workout.exercises.push({
            id: 1,
            sets: [
              {
                reps: null,
                goal: null
              }
            ]
          });
          console.log($scope.workout);
        }

        function _toggleWorkout() {
          if ($scope.addingWorkout) {
            $scope.addingWorkout = false;
          } else {
            $scope.addingWorkout = true;
          }
        }

        function _createWorkout() {
          WorkoutService.create($scope.workout).then(function (){
            $scope.workout.exercises = [{
              id: 1,
              sets: [{
                reps: null,
                goal: null
              }]
            }];
            $scope.workout.comment = null;
            $scope.workout.date = null;
            $scope.addingWorkout = false;
          });
        }

        function _initialize() {
          //Setup scope variables
          $scope.addingWorkout = false;
          $scope.getExercises = _getExercises;
          $scope.toggleWorkout = _toggleWorkout;
          $scope.addExercise = _addExercise;
          $scope.exercises = {};
          $scope.workout = {};
          $scope.workout.exercises = [{
            id: 1,
            sets: [
              {
                reps: null,
                goal: null
              }
            ]
          }];
          $scope.createWorkout = _createWorkout;
          $scope.getExercises();
        }

        _initialize();
      }],
      link: function () {
      }
    };
  }]);
