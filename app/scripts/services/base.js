angular.module('introApp').factory('ServiceBase', ['$http', '$q', '$log', function ($http, $q, $log) {
  'use strict';
  // AngularJS will instantiate a singleton by calling "new" on this function

  /**
   * @class  ServiceBase
   * @param {Object} config The configuration options for this service.
   * @constructor
   */
  function ServiceBase(config) {
    config = config || {};
    this.config = angular.extend({
      idAttribute: 'id'
    }, config);
  }

  ServiceBase..prototype.GET = function(url, config) {
    var deferred = $q.defer();
    var start = new Date().getTime();
    $http.get(url, config).success(function (data, status, headers, config) {
      $log.debug('Request: GET ' + url + ' Time taken: ' + (new Date().getTime() - start) + 'ms', arguments);
      if (data.status && data.data && data.status === 'Success') {
        deferred.resolve(data.data, status, headers, config);
      } else if (data.status && data.data && data.status !== 'Success') {
        deferred.reject(data.data, status, headers, config);
      } else {
        deferred.resolve(data, status, headers, config);
      }
    }).error(function (data, status, headers, config) {
      $log.error(arguments);
      deferred.reject(data, status, headers, config);
    });
    return deferred.promise;
  };

  // Return the "abstract" "class".
  return ServiceBase;
}]);
