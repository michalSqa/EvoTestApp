'use strict';

/**
 * @ngdoc service
 * @name evoAppApp.DataService
 * @description
 * # DataService
 * Service in the evoAppApp.
 */
angular.module('evoAppApp')
  .service('dataService', function ($http) {

    this.getInstallations = function() {
      return $http.get('/api/installations').then(function(response) {
        return response.data;
      });
    }

    this.getRevenues = function() {
      return $http.get('/api/revenues').then(function(response) {
        return response.data;
      });
    }
  });
