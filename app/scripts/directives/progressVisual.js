angular.module('introApp')
  .directive('progressVisual', ['d3Service', function (d3Service) {
  'use strict';
  return {
    restrict: 'A',
    scope: {},
    controller: [function (){
      d3Service.d3().then(function (d3) {
        d3.select('.progress-container')
          .append('h1')
          .text('Hello World!');
      });
    }],
    link: function() {

    }
  };
}]);
