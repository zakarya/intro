angular.module('introApp')
  .directive('progress', [ function () {
    'use strict';
    return {
      templateUrl: 'views/partials/progress.html',
      restrict: 'A',
      controller: ['$scope', 'WorkoutService', 'ProgressService', function ($scope, WorkoutService, ProgressService) {

        function _getWorkouts() {
          WorkoutService.findAll().then(function (data) {
            $scope.workouts = data;
          });
        }

        function _getProgressions() {
          ProgressService.findAll().then(function (data) {
            $scope.progressions = data;
          });
        }

        function _initialize() {
          $scope.getProgressions = _getProgressions;
          $scope.getWorkouts = _getWorkouts;
          $scope.user.exercises = {};
          $scope.progressions = [];
          $scope.getProgressions();
          $scope.workouts = {};
          $scope.getWorkouts();
        }

        _initialize();
      }],
      link: function () {
      }
    };
  }]);
