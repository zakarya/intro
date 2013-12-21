'use strict';

angular.module('introApp')
  .directive('progress', [function () {
    return {
      templateUrl: 'views/partials/progress.html',
      restrict: 'A',
      link: function () {
      }
    };
  }]);
