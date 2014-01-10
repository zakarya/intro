angular.module('introApp')
  .service('AuthenticationService', ['$http', '$cookieStore', 'BaseService', function ($http, $cookieStore, BaseService) {
    'use strict';
    var baseUrl = introApiUrl + '/auth';

    function AuthenticationService() {
      
    }

    AuthenticationService.prototype = new BaseService({
      baseUrl: baseUrl
    });

    return new AuthenticationService();
  }]);
