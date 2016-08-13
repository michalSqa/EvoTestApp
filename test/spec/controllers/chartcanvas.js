'use strict';

describe('Controller: ChartcanvasCtrl', function () {

  // load the controller's module
  beforeEach(module('evoAppApp'));

  var ChartCanvasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartCanvasCtrl = $controller('ChartCanvasCtrl', {
      $scope: scope
    });
  }));

  it('should initialize the controller', function() {
    expect(ChartCanvasCtrl).toBeDefined();
  })
});
