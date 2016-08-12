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
      data: '=',
      link: function (scope, element, attrs) {
        scope.overrideData= [];

        this.generateOverrideData = function() {
          if(scope.overrideData.length == 0) {
            var data = scope.$eval(attrs.data);
            for(var series in data.chartData.data) {
              scope.overrideData.push({tension: 0, borderWidth:4});
            }
          }
        };

        this.generateOverrideData();

      }
    };
  });
