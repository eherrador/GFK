(function () {
    'use strict';

    var GFKServices = angular.module('GFKServices', ['ngResource']);

    GFKServices.factory('Ciudades', ['$resource',
      function ($resource) {
          return $resource('/api/ciudades/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);

    GFKServices.factory('Categorias', ['$resource',
      function ($resource) {
          return $resource('/api/categorias/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);

})();