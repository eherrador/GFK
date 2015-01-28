var mapa;

$(document).ready(function ($) {
    "use strict";

    function initMap() {
        //Enabling new cartography and themes
        google.maps.visualRefresh = true;

        //Setting starting options of map
        var mapOptions = {
            //center: new google.maps.LatLng(39.9078, 32.8252),
            //zoom: 11,
            //maxZoom: 16,
            //minZoom: 7,
            //draggable: false,
            //disableDefaultUI: false,
            //scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //Getting map DOM element
        var mapElement = document.getElementById('mapDiv');

        //Creating a map with DOM element which is just obtained
        mapa = new google.maps.Map(mapElement, mapOptions);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function (position) {
                  var lat = position.coords.latitude;
                  var lng = position.coords.longitude;
                  //Creating LatLng object with latitude and
                  //longitude.
                  var devCenter = new google.maps.LatLng(lat, lng);
                  mapa.setCenter(devCenter);
                  mapa.setZoom(11);
              });
        }
    }

    google.maps.event.addDomListener(window, 'load', initMap);

    startButtonEvents();

    //var hraformEthnicGroupPickButton = $("#hraformEthnicGroupPickButton");
    //$("#hraformEthnicGroupMenu li a").on("click", function () {
    //    var ethnicGroup = $(this).text();
    //    hraformEthnicGroupPickButton.text(ethnicGroup);
    //});
});

(function () {
    "use strict";

    var pickButtonCategorias = $("#pickButtonCategorias");
    var pickButtonClientes = $("#pickButtonClientes");
    var pickButtonMetodologias = $("#pickButtonMetodologias");
    var pickButtonTipoLevantamientos = $("#pickButtonTipoLevantamientos");

    $("#groupMenuCategorias li a").on("click", function () {
        var ethnicGroup = $(this).text();
        pickButtonCategorias.text(ethnicGroup);
    });

    $("#groupMenuClientes li a").on("click", function () {
        var ethnicGroup = $(this).text();
        pickButtonClientes.text(ethnicGroup);
    });

    $("#groupMenuMetodologias li a").on("click", function () {
        var ethnicGroup = $(this).text();
        pickButtonMetodologias.text(ethnicGroup);
    });

    $("#groupMenuTipoLevantamientos li a").on("click", function () {
        var ethnicGroup = $(this).text();
        pickButtonTipoLevantamientos.text(ethnicGroup);
    });
})();

function startButtonEvents() {
    document.getElementById('menuMonterrey'
      ).addEventListener('click', function () {
          zoomToMonterrey();
      });

    document.getElementById('menuGuadalajara'
      ).addEventListener('click', function () {
          zoomToGuadalajara();
      });

    document.getElementById('menuCiudadMexico'
      ).addEventListener('click', function () {
          zoomToCiudadMexico();
      });

    document.getElementById('menuCuliacan'
      ).addEventListener('click', function () {
          zoomToCuliacan();
      });

    document.getElementById('menuHermosillo'
      ).addEventListener('click', function () {
          zoomToHermosillo();
      });

    document.getElementById('menuMazatlan'
      ).addEventListener('click', function () {
          zoomToMazatlan();
      });

    document.getElementById('menuAguascalientes'
      ).addEventListener('click', function () {
          zoomToAguascalientes();
      });

    document.getElementById('menuCelaya'
      ).addEventListener('click', function () {
          zoomToCelaya();
      });

    document.getElementById('menuQueretaro'
      ).addEventListener('click', function () {
          zoomToQueretaro();
      });

    document.getElementById('menuLeon'
      ).addEventListener('click', function () {
          zoomToLeon();
      });

    document.getElementById('menuSanLuisPotosi'
      ).addEventListener('click', function () {
          zoomToSanLuisPotosi();
      });

    document.getElementById('menuCuernavaca'
      ).addEventListener('click', function () {
          zoomToCuernavaca();
      });

    document.getElementById('menuToluca'
      ).addEventListener('click', function () {
          zoomToToluca();
      });

    document.getElementById('menuPachuca'
      ).addEventListener('click', function () {
          zoomToPachuca();
      });

    document.getElementById('menuCuatla'
      ).addEventListener('click', function () {
          zoomToCuatla();
      });
}

function zoomToMonterrey() {
    var monterrey = new google.maps.LatLng(25.660263, -100.296556);
    mapa.setCenter(monterrey);
    mapa.setZoom(11);
}

function zoomToGuadalajara() {
    var guadalajara = new google.maps.LatLng(20.677807, -103.343825);
    mapa.setCenter(guadalajara);
    mapa.setZoom(11);
}

function zoomToCiudadMexico() {
    var ciudadmexico = new google.maps.LatLng(19.432604, -99.132935);
    mapa.setCenter(ciudadmexico);
    mapa.setZoom(11);
}

function zoomToCuliacan() {
    var culiacan = new google.maps.LatLng(24.797933, -107.408148);
    mapa.setCenter(culiacan);
    mapa.setZoom(11);
}

function zoomToHermosillo() {
    var hermosillo = new google.maps.LatLng(29.081477, -110.962376);
    mapa.setCenter(hermosillo);
    mapa.setZoom(11);
}

function zoomToMazatlan() {
    var mazatlan = new google.maps.LatLng(23.252780, -106.412851);
    mapa.setCenter(mazatlan);
    mapa.setZoom(11);
}

function zoomToAguascalientes() {
    var aguascalientes = new google.maps.LatLng(21.889884, -102.291817);
    mapa.setCenter(aguascalientes);
    mapa.setZoom(11);
}

function zoomToCelaya() {
    var celaya = new google.maps.LatLng(20.527456, -100.815476);
    mapa.setCenter(celaya);
    mapa.setZoom(11);
}

function zoomToQueretaro() {
    var queretaro = new google.maps.LatLng(20.604621, -100.403162);
    mapa.setCenter(queretaro);
    mapa.setZoom(11);
}

function zoomToLeon() {
    var leon = new google.maps.LatLng(21.124897, -101.672011);
    mapa.setCenter(leon);
    mapa.setZoom(11);
}

function zoomToSanLuisPotosi() {
    var sanluispotosi = new google.maps.LatLng(22.154587, -100.972575);
    mapa.setCenter(sanluispotosi);
    mapa.setZoom(11);
}

function zoomToCuernavaca() {
    var cuernavaca = new google.maps.LatLng(18.933813, -99.226891);
    mapa.setCenter(cuernavaca);
    mapa.setZoom(11);
}

function zoomToToluca() {
    var toluca = new google.maps.LatLng(19.291760, -99.645114);
    mapa.setCenter(toluca);
    mapa.setZoom(11);
}

function zoomToPachuca() {
    var pachuca = new google.maps.LatLng(20.101134, -98.747308);
    mapa.setCenter(pachuca);
    mapa.setZoom(11);
}

function zoomToCuatla() {
    var cuatla = new google.maps.LatLng(18.812774, -98.955508);
    mapa.setCenter(cuatla);
    mapa.setZoom(11);
}
