angular.module('introApp')
  .service('ExerciseService', ['BaseService', function (BaseService) {
    'use strict';

    var baseUrl = introApiUrl + '/exercise';

    function ExerciseService() {

    }

    ExerciseService.prototype = new BaseService({
      baseUrl: baseUrl
    });

    return new ExerciseService();
  }]);
