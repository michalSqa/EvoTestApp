'use strict';

/**
 * @ngdoc function
 * @name evoAppApp.controller:ChartcanvasCtrl
 * @description
 * # ChartcanvasCtrl
 * Controller of the evoAppApp
 */
angular.module('evoAppApp')
  .controller('ChartCanvasCtrl', ['$scope', function ($scope) {
    $scope.colors = ['#ed6e37', '#259e01', '#15a0c8']
  }]);
