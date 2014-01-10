angular.module('introApp').controller('MainCtrl', ['$scope', '$rootScope', 'AuthenticationService', function ($scope, $rootScope, AuthenticationService) {
    'use strict';

    function _getTabs() {
      $scope.sidetabs = {
        progress: {
          index: 0,
          text: 'Progress'
        },
        tracker: {
          index: 1,
          text: 'Tracker'
        },
        goals: {
          index: 2,
          text: 'Goals'
        },
        exercises: {
          index: 3,
          text: 'Exercises'
        }
      };
    }

    function _initialize() {
      //Setup Scope variables
      $scope.sidetabs = {};
      $scope.getTabs = _getTabs;
      $rootScope.activeSidetab = 'Progress';
      $scope.getTabs();
    }

    _initialize();
  }]);