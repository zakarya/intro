angular.module('introApp').filter('orderObjectByKey', function () {
  /**
   * @method orderObjectByKey
   * @desc Use this filter when iterating over Objects in an ngRepeat. This filter allows you to order the object by a
   * key that they all share.
   * @param {Object} obj
   * @param {String} key
   * @param {Boolean} reverse
   * @returns {Array} The ordered array.
   *
   * @example
   // in javascript
   var objects = {
     obj1: {
       name: 'John'
     },
     obj2: {
       name: 'Adam'
     }
   };

   // in html
   <p data-ng-repeat="obj on objects | orderObjectByKey:'name'>{{ obj.name }}</p>

   // outputs
   <p>Adam</p>
   <p>John</p>
   */
  'use strict';
  return function (obj, key, reverse) {
    var keys = [], array = [], k;
    if (key) {
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          array.push(obj[k]);
        }
      }
      array.sort(function (a, b) {
        if (reverse) {
          return b[key] - a[key];
        }
        return a[key] - b[key];
      });
    } else {
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      keys.sort(function (a, b) {
        if (reverse) {
          return b - a;
        }
        return a - b;
      });
      for (var i = 0; i < keys.length; i++) {
        array.push(obj[keys[i]]);
      }
    }
    return array;
  };
});