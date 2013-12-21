'use strict';

describe('Directive: goals', function () {

  // load the directive's module
  beforeEach(module('introApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<goals></goals>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the goals directive');
  }));
});
