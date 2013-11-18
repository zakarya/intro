'use strict';

describe('Service: Base', function () {

  // load the service's module
  beforeEach(module('introApp'));

  // instantiate service
  var Base;
  beforeEach(inject(function (_Base_) {
    Base = _Base_;
  }));

  it('should do something', function () {
    expect(!!Base).toBe(true);
  });

});
