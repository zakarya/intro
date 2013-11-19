angular.module('introApp')
  .controller('DashboardCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
