angular.module('introApp')
  .service('ServiceSidetabs', ['$rootScope', function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    'use strict';
    var allTabs = {
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

    var ServiceSidetabs = {
      closeTabs: function () {
        this.openTab(null);
      },

      openTab: function () {
        angular.forEach(allTabs, function (tab, key) {
          if (key === name) {
            $rootScope.$broadcast('activeSideTab');
            tab.active = true;
          } else {
            tab.active = false;
          }
        });
      },

      tabs: allTabs
    };

    $rootScope.$on('activeNavTab', function () {
      ServiceSidetabs.closeTabs();
    });

    return ServiceSidetabs;
  }]);
