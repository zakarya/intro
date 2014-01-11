angular.module('introApp')
  .service('AuthenticationService', ['$http', '$q', '$cookies', 'BaseService', function ($http, $q, $cookies, BaseService) {
    'use strict';
    var baseUrl = introApiUrl + '/auth';

    function AuthenticationService() {

      this.login = function (username, password) {
        var deferred = $q.defer();
        var data = 'username=' + encodeURIComponent(username) + '&password=' + password;
        var headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };
        this.POST(baseUrl, data, {
          headers: headers
        }).then(function (data) {
            if (!data || !data.token) {
              deferred.reject(data);
            } else {
              $cookies.token = data.token;
              deferred.resolve($cookies.token);
            }
          }, deferred.reject);

        return deferred.promise;
      };

      this.logout = function () {
        delete $cookies.token;
      };
    }

    AuthenticationService.prototype = new BaseService({
      baseUrl: baseUrl
    });

    return new AuthenticationService();
  }]);
