'use strict';

/**
 * @ngdoc overview
 * @name evoAppApp
 * @description
 * # evoAppApp
 *
 * Main module of the application.
 */
angular
  .module('evoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngMockE2E',
    'ngTouch',
    'chart.js'
  ])
  .config(['ChartJsProvider', function (ChartJsProvider) {

    ChartJsProvider.setOptions({
      responsive: true,
      maintainAspectRatio: false,
      gridLines: {
        offsetGridLines: true
      }
    });

    ChartJsProvider.setOptions('line', {
      showLines: true,
      elements: {
      line: {
        tension: 0,
          borderWidth: 6
      },
      point: {
        radius: 4,
          borderWidth: 2
      }
    }
    });

    ChartJsProvider.setOptions('bar', {
      elements: {
        rectangle: {
          borderWidth: 0,
        }
      }
    });
  }]);

