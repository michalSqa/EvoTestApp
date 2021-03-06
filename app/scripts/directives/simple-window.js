'use strict';

/**
 * @ngdoc directive
 * @name evoAppApp.directive:simpleWindow
 * @description
 * # simpleWindow
 */
angular.module('evoAppApp')
  .directive('simpleWindow', function () {
    return {
      controller: 'SimpleWindowCtrl',
      templateUrl: 'views/components/simpleWindow.html',
      transclude: true,
      restrict: 'E',
      scope: {
        labelText: '@title',
        iconUrl: '@iconurl'
      }
    };
  });
