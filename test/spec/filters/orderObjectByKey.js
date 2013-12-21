'use strict';

describe('Filter: orderObjectByKey', function () {

  // load the filter's module
  beforeEach(module('introApp'));

  // initialize a new instance of the filter before each test
  var orderObjectByKey;
  beforeEach(inject(function($filter) {
    orderObjectByKey = $filter('orderObjectByKey');
  }));

  it('should return the input prefixed with "orderObjectByKey filter:"', function () {
    var text = 'angularjs';
    expect(orderObjectByKey(text)).toBe('orderObjectByKey filter: ' + text);
  });

});
