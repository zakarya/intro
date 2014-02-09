angular.module('introApp')
  .service('ProgressService', ['BaseService', function (BaseService) {
    'use strict';

    var baseUrl = introApiUrl + '/progress';

    function ProgressService() {

    }

    ProgressService.prototype = new BaseService({
      baseUrl: baseUrl
    });

    return new ProgressService();
  }]);