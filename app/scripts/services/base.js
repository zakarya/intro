'use strict';

angular.module('introApp')
  .factory('base', [function() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function() {
        return meaningOfLife;
      }
    };
  }]);
