'use strict';

/**
 * @ngdoc directive
 * @name evoAppApp.directive:charts
 * @description
 * # charts
 */
angular.module('evoAppApp')
  .directive('chartCanvas', function () {
    return {
      controller: 'ChartCanvasCtrl',
      templateUrl: 'views/components/chartCanvas.html',
      restrict: 'E',
      scope:{
        chart: '=',
        type: '=',
      }
    };
  });
