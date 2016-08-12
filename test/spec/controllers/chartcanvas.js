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
      // place here mocked dependencies
    });
  }));

  describe('chart type selection', function(){
    it('should return true if bar chart should show', function() {
      //given
      scope.chartType = 'bar';
      //when
      var result = scope.showChart('bar');
      //then
      expect(result).toBeTruthy();
    })

    it('should return true if bar chart should show', function() {
      //given
      scope.chartType = 'line';
      //when
      var result = scope.showChart('bar');
      //then
      expect(result).toBeFalsy();
    })
  })
});
