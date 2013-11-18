'use strict';

angular.module('introApp')
  .directive('tester', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the tester directive');
      }
    };
  });
