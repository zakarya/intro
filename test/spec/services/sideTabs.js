'use strict';

describe('Service: Sidetabs', function () {

  // load the service's module
  beforeEach(module('introApp'));

  // instantiate service
  var Sidetabs;
  beforeEach(inject(function(_Sidetabs_) {
    Sidetabs = _Sidetabs_;
  }));

  it('should do something', function () {
    expect(!!Sidetabs).toBe(true);
  });

});
