'use strict';

angular.module('introApp')
  .directive('exercises', [function () {
    return {
      templateUrl: 'views/partials/exercises.html',
      restrict: 'A',
      link: function () {
      }
    };
  }]);
