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
    $scope.chartType;

    $scope.options = {
      title: {
        display: false,
        text: 'Test title',
        fontSize: 10,
        fontStyle: 'normal',
        fullWidth: true
      }
    };
    $scope.showChart = function(type) {
      return $scope.chartType == type;
    };
  }]);
