(function () {
    'use strict';

    var GFKControllers = angular.module('GFKControllers', []);

    GFKControllers.controller('NuevoProyectoCtrl', ['$scope', 'Ciudades', 'Categorias', 'Metodologias', 'Clientes', 'Levantamientos', 'NvoProyecto',
        function NuevoProyectoCtrl($scope, Ciudades, Categorias, Metodologias, Clientes, Levantamientos, NvoProyecto) {
            //$scope.proyecto = {};

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

            
            $scope.CreaNuevoProyecto = function () {
                this.proyecto = {};

                this.proyecto.numProyecto = this.numProyecto;
                this.proyecto.nombreProyecto = this.nombreProyecto;
                this.proyecto.categoriaSeleccionadaID = this.categoriaSeleccionada.ID;
                this.proyecto.clienteSeleccionadoID = this.clienteSeleccionado.ID;
                this.proyecto.ciudadSeleccionadaID = this.ciudadSeleccionada.ID;
                this.proyecto.metodologiaSeleccionadaID = this.metodologiaSeleccionada.ID;
                this.proyecto.levantamientoSeleccionadoID = this.levantamientoSeleccionado.ID;
                this.proyecto.muestraTotal = this.muestraTotal;
                this.proyecto.entrevistasPorPunto = this.entrevistasPorPunto;

                this.proyecto.numAB = this.numAB;
                this.proyecto.numCPlus = this.numCPlus;
                this.proyecto.numC = this.numC;
                this.proyecto.numCMinus = this.numCMinus;
                this.proyecto.numDMinus = this.numDMinus;
                this.proyecto.numDPlus = this.numDMinus;
                this.proyecto.numE = this.numE;
                
                this.proyecto.eAB = this.eAB;
                this.proyecto.eCPlus = this.eCPlus;
                this.proyecto.eC = this.eC;
                this.proyecto.eCMinus = this.eCMinus;
                this.proyecto.eDMinus = this.eDMinus;
                this.proyecto.eDPlus = this.eDPlus;
                this.proyecto.eE = this.eE;

                this.proyecto.eAB = this.aAB;
                this.proyecto.aCPlus = this.aCPlus;
                this.proyecto.aC = this.aC;
                this.proyecto.aCMinus = this.aCMinus;
                this.proyecto.aDMinus = this.aDMinus;
                this.proyecto.aDPlus = this.aDPlus;
                this.proyecto.eE = this.aE;

                //alert(this.proyecto.numProyecto + "  " + this.proyecto.nombreProyecto + " " + this.proyecto.numC + " " + this.proyecto.categoriaSeleccionadaID); // + " " + proyecto.numC);

                NvoProyecto.save({ proyecto: "edgar" }); //this.proyecto});
                //$scope.proyecto = {};
            };
        }
    ]);

})();