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
