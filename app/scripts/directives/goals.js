angular.module('introApp')
  .directive('goals', ['GoalService', function (GoalService) {
    'use strict';
    return {
      templateUrl: 'views/partials/goals.html',
      restrict: 'A',
      scope: true,
      controller: ['$scope', function ($scope) {

        function _getGoals() {
          GoalService.findAll().then(function (data) {
            $scope.goals = data;
          });
        }

        function _createGoal () {
          console.log($scope.goal);
          GoalService.create($scope.goal).then(function (data) {
            $scope.goals.unshift(data);
          });
        }

        function _initialize() {
          $scope.goals = [];
          $scope.getGoals = _getGoals;
          $scope.createGoal = _createGoal;
          $scope.getGoals();
        }

        _initialize();
      }],
      link: function () {
      }
    };
  }]);
