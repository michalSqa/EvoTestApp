'use strict';

/**
 * @ngdoc directive
 * @name evoAppApp.directive:infoWithChart
 * @description
 * # infoWithChart
 */
angular.module('evoAppApp')
  .directive('infoWithChart', function () {
    return {
      templateUrl: 'views/components/infoWithChart.html',
      restrict: 'E',
      scope: {
        data: '=',
        type: '='
      },
      link: function (scope, element, attrs) {
        scope.chartType = attrs.type;
      }
    };
  });
