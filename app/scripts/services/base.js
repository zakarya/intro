angular.module('introApp').factory('BaseService', ['$http', '$q', '$log', function ($http, $q, $log) {
  'use strict';

  /**
   * @class Promise
   * @type {Function|promise|Function|Function}
   */

  /**
   * @class BaseService
   * @param {Object} config This configuration options for this service.
   * @constructor
   */
  function BaseService(config) {
    config = config || {};
    this.config = angular.extend({
      idAttribute: 'id'
    }, config);
  }

  /**
   * @method GET
   * @param {String} url The request url.
   * @param {Object} config Configuration object for the $http request.
   * @returns {Promise}
   * @public
   */
  BaseService.prototype.GET = function (url, config) {
    var deferred = $q.defer();
    var start = new Date().getTime();
    $http.get(url, config).success(function (data, status, headers, config) {
      //$log.debug('Request: GET ' + url + ' Time taken: ' + (new Date().getTime() - start) + 'ms', arguments);
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

  /**
   * @method POST
   * @param {String} url The request url.
   * @param {*} data The request payload.
   * @param {Object} config Configuration object for the $http request.
   * @returns {Promise}
   * @public
   */
  BaseService.prototype.POST = function (url, data, config) {
    var deferred = $q.defer();
    var start = new Date().getTime();
    $http.post(url, data, config).success(function (data, status, headers, config) {
      //$log.debug('Request: POST ' + url + ' Time taken: ' + (new Date().getTime() - start) + 'ms', arguments);
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

  /**
   * @method PUT
   * @param {String} url The request url.
   * @param {*} data The request payload.
   * @param {Object} config Configuration object for the $http request.
   * @returns {Promise}
   * @public
   */
  BaseService.prototype.PUT = function (url, data, config) {
    var deferred = $q.defer();
    var start = new Date().getTime();
    $http.put(url, data, config).success(function (data, status, headers, config) {
      //$log.debug('Request: PUT ' + url + ' Time taken: ' + (new Date().getTime() - start) + 'ms', arguments);
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

  /**
   * @method DELETE
   * @param {String} url The request url.
   * @param {Object} config Configuration object for the $http request.
   * @returns {Promise}
   * @public
   */
  BaseService.prototype.DELETE = function (url, config) {
    var deferred = $q.defer();
    var start = new Date().getTime();
    $http['delete'](url, config).success(function (data, status, headers, config) {
      //$log.debug('Request: DELETE ' + url + ' Time taken: ' + (new Date().getTime() - start) + 'ms', arguments);
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

  /**
   * @method find
   * @desc Retrieve the resource item with the given id.
   * @param {String|Number} id The id of the resource to retrieve.
   * @param {Object} params Object that will be serialized into query parameters in the url.
   * @returns {Promise}
   */
  BaseService.prototype.find = function (id, params) {
    if (!id) {
      throw new Error('You must provide an id!');
    }
    var deferred = $q.defer();
    var url = this.config.baseUrl + '/' + id;
    var self = this;
    if (this.config.cache && this.config.cache.get(url)) {
      var data = this.config.cache.get(url);
      //$log.debug('(cached) Request: GET ' + url, [id, data]);
      deferred.resolve(data);
    } else {
      this.GET(url, { params: params }).then(function (data) {
        if (self.config.cache) {
          if (!data[self.config.idAttribute]) {
            throw new Error('The server must return the item (with its id) in order to use the cache!');
          }
          self.config.cache.put(url, data);
        }
        deferred.resolve(data);
      }, deferred.reject);
    }
    return deferred.promise;
  };

  /**
   * @method findAll
   * @desc Retrieve all resource items.
   * @param {Object} params Object that will be serialized into query parameters in the url.
   * @returns {Promise}
   */
  BaseService.prototype.findAll = function (params) {
    return this.GET(this.config.baseUrl, { params: params });
  };

  /**
   * @method create
   * @desc Create a new resource item.
   * @param {Object} attributes The attributes of the resource item to create on the server.
   * @param {Object} params Object that will be serialized into query parameters in the url.
   * @returns {Promise}
   */
  BaseService.prototype.create = function (attributes, params) {
    var deferred = $q.defer();
    var self = this;
    this.POST(this.config.baseUrl, attributes, { params: params }).then(function (data) {
      if (self.config.cache) {
        if (!data[self.config.idAttribute]) {
          throw new Error('The new item must have an id in order to use the cache!');
        }
        self.config.cache.put(self.config.baseUrl + '/' + data[self.config.idAttribute], data);
      }
      deferred.resolve(data);
    }, deferred.reject);
    return deferred.promise;
  };

  /**
   * @method update
   * @desc Update the resource item with the given id.
   * @param {String|Number} id The id of the resource item to update.
   * @param {Object} attributes The attributes with which to update the resource item.
   * @param {Object} params Object that will be serialized into query parameters in the url.
   * @returns {Promise}
   */
  BaseService.prototype.update = function (id, attributes, params) {
    if (!id) {
      throw new Error('You must provide an id!');
    }
    var deferred = $q.defer();
    var url = this.config.baseUrl + '/' + id;
    var self = this;
    this.PUT(url, attributes, { params: params }).then(function (data) {
      if (self.config.cache) {
        self.config.cache.put(url, data);
      }
      deferred.resolve(data);
    }, deferred.reject);
    return deferred.promise;
  };

  /**
   * @method delete
   * @desc Delete the resource item with the given id.
   * @param {String|Number} id The id of the resource item to delete.
   * @param {Object} params Object that will be serialized into query parameters in the url.
   * @returns {Promise}
   */
  BaseService.prototype.del = function (id, params) {
    if (!id) {
      throw new Error('You must provide an id!');
    }
    var deferred = $q.defer();
    var url = this.config.baseUrl + '/' + id;
    var self = this;
    this.DELETE(url, { params: params }).then(function (data) {
      if (self.config.cache) {
        self.config.cache.remove(url);
      }
      deferred.resolve(data);
    }, deferred.reject);
    return deferred.promise;
  };

  // Return the "abstract" "class".
  return BaseService;
}]);