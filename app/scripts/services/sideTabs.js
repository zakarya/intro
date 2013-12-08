angular.module('introApp')
  .service('ServiceSidetabs', ['$rootScope', function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    'use strict';
    var all_tabs = {
      progress: {
        text: 'Progress'
      },
      tracker: {
        text: 'Tracker'
      },
      goals: {
        text: 'Goals'
      },
      exercises: {
        text: 'Exercises'
      }
    };

    var ed = {
      
    }

    var ServiceSidetabs = {


    };

    return ServiceSidetabs;
  }]);
