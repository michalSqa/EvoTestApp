'use strict';

/**
 * @ngdoc function
 * @name evoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the evoAppApp
 */
angular.module('evoAppApp')
  .controller('MainCtrl', ['$scope','$http', function ($scope, $http) {

    $scope.awesomeThings = [1, 2, 3];

    $scope.chart_options = {
        responsive: true,
        legend:{
            position: 'bottom',
            display: true
        }
    };
    $scope.labels = ["Week 48", "Week 49", "Week 50", "Week 51", "Week 52"];
    $scope.series = ['Series A', 'Series B', 'Series C'];
    $scope.data2 = [
        [28, 148, 240, 19, 86],
        [65, 259, 280, 81, 40],
        [65, 259, 280, 81, 40]
      ];

    $scope.chart_two_data = [
      [128, 248, 240, 19, 86],
      [265, 259, 280, 81, 40],
      [165, 259, 481, 655, 40]
    ];

    $scope.getInstallations = function() {
      $http.get('/api/installations').then(function(response) {
        console.log('response', response.data);
      });
    };

    $scope.init = function() {
      $scope.getInstallations();
    };


  }]);
