'use strict';

describe('Service: Goal', function () {

  // load the service's module
  beforeEach(module('introApp'));

  // instantiate service
  var Goal;
  beforeEach(inject(function(_Goal_) {
    Goal = _Goal_;
  }));

  it('should do something', function () {
    expect(!!Goal).toBe(true);
  });

});
