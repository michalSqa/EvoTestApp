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
    'ngTouch',
    'chart.js'
  ])
  .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }])
