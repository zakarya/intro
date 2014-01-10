angular.module('introApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';

    var resolveAuthentication = ['$cookies', '$location', 'ServiceAuthorization', function ($cookies, $location, ServiceAuthorization) {
        var timestamp = Math.floor(new Date().getTime() / 1000);
        if ($cookies.resetPassword) {
          $location.url('/reset').replace();
        } else {
          if (!$cookies.auth_token || !$cookies.expires) {
            $location.url('/login').replace();
          } else if (parseInt($cookies.expires, 10) < timestamp) {
            ServiceAuthorization.logout();
            $location.url('/login?timedOut=true').replace();
          }
        }
      }];

    var getUser = ['UserService', function (UserService) {
        return UserService.getLoggedInUser();
      }];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main/index.html',
        controller: 'MainCtrl',
        resolve: {
          authenticate: resolveAuthentication,
          user: getUser
        }
      })
      .when('/login', {
          controller: 'LoginCtrl',
          templateUrl: 'views/login.html',
          reloadOnSearch: false,
          resolve: {
            authenticate: ['$cookies', '$location', function ($cookies, $location) {
              var timestamp = Math.floor(new Date().getTime() / 1000);
              if ($cookies.auth_token && parseInt($cookies.expires, 10) > timestamp) {
                $location.url('/').replace();
              }
            }]
          }
        })
      .otherwise({
          redirectTo: '/'
        });
  }])
  .run(['$rootScope', '$window', function ($rootScope, $window) {
    'use strict';
    $window.introApiUrl = 'http://intro.vault.com/api';
  }]);
