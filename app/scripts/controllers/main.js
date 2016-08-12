'use strict';

/**
 * @ngdoc function
 * @name evoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the evoAppApp
 */
angular.module('evoAppApp')
  .controller('MainCtrl', ['$scope','$http', 'dataService', function ($scope, $http, dataService) {

    $scope.installationsData;
    $scope.revenuesData;

    $scope.chart_options = {
        responsive: true,
        legend:{
            position: 'bottom',
            display: true
        }
    };
    $scope.labels = ["Week 48", "Week 49", "Week 50", "Week 51", "Week 52"];
    $scope.series = ['Series A', 'Series B', 'Series C'];

    $scope.data;

    $scope.getRevenues= function() {
      dataService.getRevenues().then(function(response){
        $scope.revenuesData = response;
      });
    };

    $scope.getInstallations = function() {
      dataService.getInstallations().then(function(response){
        $scope.installationsData = response;
      });
    };

    $scope.init = function() {
      $scope.getInstallations();
      $scope.getRevenues();
    };


  }]);
