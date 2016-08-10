'use strict';

describe('Controller: SimplewindowctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('evoAppApp'));

  var SimplewindowctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimplewindowctrlCtrl = $controller('SimplewindowctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SimplewindowctrlCtrl.awesomeThings.length).toBe(3);
  });
});
