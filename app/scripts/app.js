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
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: true,
      maintainAspectRatio: false,
      borderWidth: 0,
      gridLines: {
        offsetGridLines: true
      }
    });

    ChartJsProvider.setOptions('line', {
      showLines: true,
      borderWidth: 10,
      legend:{
        position: 'bottom',
        display: false,
        labels: {
          usePointStyle: true,
          fontSize: 10
        }
      },
      point: {
        borderWidth: 5
      }
    });

    ChartJsProvider.setOptions('bar', {
      borderWidth: 5
    });
  }]);

