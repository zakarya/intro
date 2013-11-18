'use strict';

angular.module('introApp')
  .filter('tester', function () {
    return function (input) {
      return 'tester filter: ' + input;
    };
  });
