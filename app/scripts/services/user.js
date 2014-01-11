angular.module('introApp')
  .service('UserService', ['$rootScope', '$q', '$log', '$cacheFactory', 'BaseService', function UserService($rootScope, $q, $log, $cacheFactory, BaseService) {
    'use strict';
    var baseUrl = introApiUrl + '/user';

    var cache = $cacheFactory('UserServiceCache', {
    });

    function UserService() {
      this.cache = cache;

      this.getLoggedInUser = function () {
        var deferred = $q.defer();
        if (cache.get('loggedInUser')) {
          deferred.resolve(cache.get('loggedInUser'));
        } else {
          this.GET(baseUrl).then(function (data) {
            if (data && data.email) {
              cache.put('loggedInUser', data);
              $rootScope.user = data.user;
            } else {
              $log.error('Could not retrieve logged-in user!');
              deferred.reject('Could not retrieve logged-in user!');
            }
            deferred.resolve(data);
          }, deferred.reject);
        }
      };
    }

    this.updatePassword = function (data) {
        return this.PUT(introApiUrl + '/password', data);
      };

    this.logout = function (id) {
        return this.update(id, { settings: { 'lastLogout': new Date().getTime() } });
      };

    UserService.prototype = new BaseService({
      baseUrl: baseUrl
    });

    return new UserService();
  }]);
