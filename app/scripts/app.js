angular.module('introApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'jmdobry.angular-cache',
  'angular-data.DS',
  'd3',
  'ui.date'
])
  .config(['DSProvider', '$routeProvider', '$httpProvider', function (DSProvider, $routeProvider, $httpProvider) {
    'use strict';

    DSProvider.defaults.baseUrl = 'http://intro.vault.com/api/';

    var interceptor = ['$cookies', '$location', '$q', '$log', function ($cookies, $location, $q, $log) {
      return {
          request: function (config) {
            if (!config.headers['X-Auth-Token'] && $cookies.token) {
              config.headers['X-Auth-Token'] = $cookies.token;
            }
            return config || $q.when(config);
          },
          responseError: function (rejection) {
            if (rejection.status === 401) {
              $log.error('Unauthenticated request!', rejection);
              delete $cookies.token;
              var path = $location.path();
              if (path.indexOf('invite') === -1 && path.indexOf('token') === -1 && path.indexOf('reset') === -1) {
                $location.path('/login');
              }
            } else if (rejection.status === 403) {
              $log.error('Forbidden!', rejection);
              $location.path('/').replace();
            } else if (rejection.status === 404) {
              $log.error('Not found!', rejection);
            } else if (rejection.status === 500) {
              $log.error('Internal Server error!', rejection);
            }
            return $q.reject(rejection);
          }
        };
    }];

    $httpProvider.interceptors.push(interceptor);

    var resolveAuthentication = ['$cookies', '$location', function ($cookies, $location) {
        if ($cookies.resetPassword) {
          $location.url('/reset').replace();
        } else {
          if (!$cookies.token) {
            $location.url('/login').replace();
          } else {
            // AuthenticationService.logout();
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
              // var timestamp = Math.floor(new Date().getTime() / 1000);
              if ($cookies.token) {
                $location.url('/').replace();
              }
            }]
          }
        })
      .otherwise({
          redirectTo: '/'
        });
  }])
  .run(['DS', '$rootScope', '$window', function (DS, $rootScope, $window) {
    'use strict';
    $window.introApiUrl = 'http://intro.vault.com/api';

    /***********************************************/
    /************** DEFINE RESOURCES ***************/
    /***********************************************/
    DS.defineResource({
      name: 'exercise'
    });

    DS.defineResource({
      name: 'progress'
    });

    DS.defineResource({
      name: 'goal'
    });

    DS.defineResource({
      name: 'workout'
    });
  }]);
