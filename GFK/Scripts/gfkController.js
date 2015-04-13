(function () {
    'use strict';

    var GFKControllers = angular.module('GFKControllers', []);

    GFKControllers.controller('CiudadesCtrl', ['$scope', 'Ciudades', 
        function CiudadesCtrl($scope, Ciudades) {
            $scope.ciudades = Ciudades.query();
        }]);

    GFKControllers.controller('CategoriasCtrl', ['$scope', 'Categorias',
        function CategoriasCtrl($scope, Categorias) {
            $scope.categorias = Categorias.query();
        }]);

})();