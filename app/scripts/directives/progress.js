angular.module('introApp')
  .directive('progress', ['$rootScope', 'UserService', function ($rootScope, UserService) {
    'use strict';
    return {
      templateUrl: 'views/partials/progress.html',
      restrict: 'A',
      controller: ['$scope', function ($scope) {
        function _getProgress() {
          UserService.find($rootScope.user.id).then(function (data) {
            $scope.user.exercises = data.exercises;
          });
        }

        function _initialize() {
          $scope.getProgress = _getProgress;
          $scope.user.exercises = {};
          $scope.getProgress();
        }

        _initialize();
      }],
      link: function () {
      }
    };
  }]);
