'use strict';

angular.module('evoAppApp')
  .run(function($httpBackend) {
    console.log('setup backend mock');
    var installations = [
      [128, 248, 240, 19, 86],
      [265, 259, 280, 81, 40],
      [165, 259, 481, 655, 40]
    ];

    $httpBackend.whenGET('/api/installations').respond(installations);

    $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templates are handled by the real server
  });
