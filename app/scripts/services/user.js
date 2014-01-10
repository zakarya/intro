angular.module('introApp')
  .service('Userservice', ['$q', '$angularCacheFactory', 'BaseService', function Userservice($q, $angularCacheFactory, BaseService) {
    'use strict';
    var baseUrl = introApiUrl + '/user';

    var cache = $angularCacheFactory('ServiceLenderUserCache', {
      maxAge: 3600000, // cache items for 1 hour
      deleteOnExpire: 'aggressive'
    });

    function UserService() {
      this.getLoggedInUser = function () {
        var deferred = $q.defer();
        if (cache.get('loggedInUser')) {
          deferred.resolve(cache.get('loggedInUser'));
        } else {
          
        }
      };
    }

    UserService.prototype = new BaseService({
      baseUrl: baseUrl
    });

    return new UserService();
  }]);
