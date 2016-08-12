'use strict';

describe('Service: DataService', function () {

  // load the service's module
  beforeEach(module('evoAppApp'));

  // instantiate service
  var DataService;
  beforeEach(inject(function (_dataService_) {
    DataService = _dataService_;
  }));

  it('should do something', function () {
    expect(DataService).toBeDefined();
  });
});
