(function () {
    'use strict';

    var GFKServices = angular.module('GFKServices', ['ngResource']);

    GFKServices.factory('Clientes', ['$resource',
      function ($resource) {
          return $resource('/api/clientes/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);

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

    GFKServices.factory('Metodologias', ['$resource',
      function ($resource) {
          return $resource('/api/metodologias/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);

    GFKServices.factory('Levantamientos', ['$resource',
      function ($resource) {
          return $resource('/api/levantamientos/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);

    GFKServices.factory('NvoProyecto', ['$resource',
      function ($resource) {
          return $resource('/api/nvoproyecto/', { '': '@proyecto' }, {
              save: { method: 'POST', params: {} }
          });
      }]);

})();