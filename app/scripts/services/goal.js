angular.module('introApp')
  .service('GoalService', ['BaseService', function (BaseService) {
    'use strict';

    var baseUrl = introApiUrl + '/goal';

    function GoalService() {

    }

    GoalService.prototype = new BaseService({
      baseUrl: baseUrl
    });

    return new GoalService();
  }]);
