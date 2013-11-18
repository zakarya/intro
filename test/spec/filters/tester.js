'use strict';

describe('Filter: tester', function () {

  // load the filter's module
  beforeEach(module('introApp'));

  // initialize a new instance of the filter before each test
  var tester;
  beforeEach(inject(function ($filter) {
    tester = $filter('tester');
  }));

  it('should return the input prefixed with "tester filter:"', function () {
    var text = 'angularjs';
    expect(tester(text)).toBe('tester filter: ' + text);
  });

});
