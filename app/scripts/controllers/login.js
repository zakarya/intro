angular.module('introApp')
  .controller('LoginCtrl', ['$scope', '$window', '$location', 'AuthenticationService', function ($scope, $window, $location, AuthenticationService) {
    'use strict';

    function _signIn() {
      $scope.loggingIn = true;
      AuthenticationService.login($scope.credentials.username, $scope.credentials.password).then(function () {
          $scope.loggingIn = false;
          // Force page refresh
          $window.location = $location.protocol() + '://' + $location.host() + ':' + $location.port();
        }, function (err) {
        $scope.loggingIn = false;
        if (err.data) {
          $scope.loginAlert.content = 'That combo isn\'t right, please try again.';
        }
        console.log($scope.loginAlert);
      });

    }

    function _logout() {
    }

    function _initialize() {
      $scope.credentials = {};
      $scope.signIn = _signIn;
      $scope.logout = _logout;

      $window.document.title = 'IntroVault - Login';
    }
    _initialize();
  }]);
