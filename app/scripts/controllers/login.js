angular.module('introApp')
  .controller('LoginCtrl', ['$scope', 'AuthenticationService', function ($scope, AuthenticationService) {
    'use strict';

    function _login() {
    }

    function _logout() {
    }

    function _initialize() {
      $scope.credentials = {};
      $scope.login = _login;
      $scope.logout = _logout;
    }
    _initialize();
  }]);
