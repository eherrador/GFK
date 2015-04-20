(function () {
    'use strict';

    var GFKControllers = angular.module('GFKControllers', []);

    GFKControllers.controller('NuevoProyectoCtrl', ['$scope', 'Ciudades', 'Categorias', 'Metodologias', 'Clientes', 'Levantamientos',
        function NuevoProyectoCtrl($scope, Ciudades, Categorias, Metodologias, Clientes, Levantamientos) {
            $scope.ciudades = Ciudades.query();
            $scope.categorias = Categorias.query();
            $scope.metodologias = Metodologias.query();
            $scope.clientes = Clientes.query();
            $scope.levantamientos = Levantamientos.query();

            $scope.numAB = 0;
            $scope.numCPlus = 0;
            $scope.numC = 0;
            $scope.numCMinus = 0;
            $scope.numDMinus = 0;
            $scope.numDPlus = 0;
            $scope.numE = 0;

            $scope.eAB = 0;
            $scope.eCPlus = 0;
            $scope.eC = 0;
            $scope.eCMinus = 0;
            $scope.eDMinus = 0;
            $scope.eDPlus = 0;
            $scope.eE = 0;

            $scope.aAB = 0;
            $scope.aCPlus = 0;
            $scope.aC = 0;
            $scope.aCMinus = 0;
            $scope.aDMinus = 0;
            $scope.aDPlus = 0;
            $scope.aE = 0;

            $scope.SimulaProyecto = function () {
                if (this.muestraTotal >= 10) {
                    if (this.entrevistasPorPunto >= 1) {
                        if (this.numAB + this.numCPlus + this.numC + this.numCMinus + this.numDMinus + this.numDPlus + this.numE == 100) {
                            this.eAB = this.muestraTotal * (this.numAB / 100);
                            this.eCPlus = this.muestraTotal * (this.numCPlus / 100);
                            this.eC = this.muestraTotal * (this.numC / 100);
                            this.eCMinus = this.muestraTotal * (this.numCMinus / 100);
                            this.eDMinus = this.muestraTotal * (this.numDMinus / 100);
                            this.eDPlus = this.muestraTotal * (this.numDPlus / 100);
                            this.eE = this.muestraTotal * (this.numE / 100);

                            this.aAB = Math.round(this.entrevistasPorPunto / this.eAB);
                            this.aCPlus = Math.round(this.entrevistasPorPunto / this.eAB);
                            this.aC = Math.round(this.entrevistasPorPunto / this.eAB);
                            this.aCMinus = Math.round(this.entrevistasPorPunto / this.eAB);
                            this.aDMinus = Math.round(this.entrevistasPorPunto / this.eAB);
                            this.aDPlus = Math.round(this.entrevistasPorPunto / this.eAB);
                            this.aE = Math.round(this.entrevistasPorPunto / this.eAB);

                        }
                        else {
                            alert("El porcentaje de todos los niveles de la regla AMAI 8X7, no llega al 100%. Por favor revisa los valores para continuar...");
                        }
                    }
                    else {
                        alert("El campo de Número de Entrevistas por Punto debe tener un valor igual o mayor a 1");
                    }
                }
                else {
                    alert("El campo de muestra total debe tener un valor igual o mayor a 10");
                }
            };
        }
    ]);

})();