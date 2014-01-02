'use strict';

describe('Service: Workout', function () {

  // load the service's module
  beforeEach(module('introApp'));

  // instantiate service
  var Workout;
  beforeEach(inject(function(_Workout_) {
    Workout = _Workout_;
  }));

  it('should do something', function () {
    expect(!!Workout).toBe(true);
  });

});
