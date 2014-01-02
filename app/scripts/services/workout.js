angular.module('introApp')
  .service('WorkoutService', ['BaseService', function Workout(BaseService) {
    'use strict';
    var baseUrl = introApiUrl + '/workout';

    function WorkoutService() {

    }

    WorkoutService.prototype = new BaseService({
      baseUrl: baseUrl
    });

    return new WorkoutService();
  }]);
