'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('evoAppApp'));

  var MainCtrl,
    dataService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _dataService_) {
    scope = $rootScope.$new();
    dataService = _dataService_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should initialize data for view', function () {
    //given
    spyOn(scope, 'getInstallations');
    spyOn(scope, 'getRevenues');
    //when
    scope.init();
    //then
    expect(scope.getInstallations).toHaveBeenCalled();
    expect(scope.getRevenues).toHaveBeenCalled();
  });

  it('should set returned installations data from dataService to scope variable', function(){
    //given
    var mockedInstallationsData = {};
    spyOn(dataService, 'getInstallations').and.callFake(function() {
      return {
        then: function(callback) { return callback(mockedInstallationsData); }
      };
    });
    //when
    scope.getInstallations();
    //then
    expect(scope.installationsData).toBe(mockedInstallationsData);
    expect(dataService.getInstallations).toHaveBeenCalled();
  });

  it('should set returned revenues data from dataService to scope variable', function(){
    //given
    var mockedRevenuesData = {};
    spyOn(dataService, 'getRevenues').and.callFake(function() {
      return {
        then: function(callback) { return callback(mockedRevenuesData); }
      };
    });
    //when
    scope.getRevenues();
    //then
    expect(scope.revenuesData).toBe(mockedRevenuesData);
    expect(dataService.getRevenues).toHaveBeenCalled();
  });
});
