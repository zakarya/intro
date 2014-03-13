angular.module('introApp').controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', 'AuthenticationService', function ($scope, $rootScope, $window, $location, AuthenticationService) {
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

    function _logout() {
      AuthenticationService.logout();
      $window.location = $location.protocol() + '://' + $location.host() + ':' + $location.port();
    }

    function _init() {
      //Setup Scope variables
      $scope.sidetabs = {};
      $scope.getTabs = _getTabs;
      $rootScope.activeSidetab = 'Progress';
      $scope.getTabs();
      $scope.logout = _logout;
    }

    _init();
  }]);