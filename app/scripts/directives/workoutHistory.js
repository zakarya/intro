angular.module('introApp')
  .directive('workoutHistory', function () {
    'use strict';
    return {
      templateUrl: 'views/partials/workout-history.html',
      restrict: 'A',
      controller: [function () {
        function _init() {

        }
        _init();
      }],
      link: function () {
      }
    };
  });
