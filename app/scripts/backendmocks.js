'use strict';

angular.module('evoAppApp')
  .run(function($httpBackend) {
    console.log('setup backend mock');
    var installations = {
      info: {
        value: '115',
        currency: '',
        description:'Installations',
        buttonDescription:'View Installations'
      },
      chartData: {
        labels: ["Week 48", "Week 49", "Week 50", "Week 51", "Week 52"],
        series: ['Series A', 'Series B', 'Series C'],
        data: [
          [228, 118, 240, 19, 86],
          [335, 449, 280, 81, 40],
          [145, 259, 481, 655, 140]
        ]
      }
    };

    $httpBackend.whenGET('/api/installations').respond(installations);

    var revenues = {
      info: {
        value: '32,556',
        currency: '$',
        description:'Revenue Stream',
        buttonDescription:'Revenue Analysis'
      },
      chartData: {
        labels: ["Week 48", "Week 49", "Week 50", "Week 51", "Week 52"],
        series: ['Series A', 'Series B', 'Series C'],
        data: [
        [128, 248, 240, 19, 86],
        [265, 259, 280, 81, 40],
        [165, 259, 481, 655, 40]
      ]
      }
  };

    $httpBackend.whenGET('/api/revenues').respond(revenues);

    $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templates are handled by the real server
  });
