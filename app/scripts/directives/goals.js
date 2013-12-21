'use strict';

angular.module('introApp')
  .directive('goals', [function () {
    return {
      templateUrl: 'views/partials/goals.html',
      restrict: 'A',
      link: function () {
      }
    };
  }]);
