'use strict';

angular.module('evoAppApp')
  .run(function($httpBackend) {
    console.log('setup backend mock');
    var installations = [{},{},{}];

    $httpBackend.whenGET('/api/installations').respond(installations);

    $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templates are handled by the real server
  });
