function PersonasController($scope) {
    $scope.nombre = 'fabian';
    $scope.chequeado = true;
    $scope.combo = '2';

    $scope.personas = [
        { nombre: "Fabian", cedula: "3345345345", fecha: new Date(), sueldo:80000000},
        { nombre: "David", cedula: "34546", fecha: new Date(), sueldo: 577777777 },
        { nombre: "Julian", cedula: "57644", fecha: new Date(), sueldo: 888888888 },
        { nombre: "John", cedula: "867867", fecha: new Date(), sueldo: 444444444444 },
        { nombre: "Elsa", cedula: "12545454", fecha: new Date(), sueldo: 6666666666 }
    ];

    $scope.ordenar = function (orden) {
        $scope.ordenProp = orden;
    }

    $scope.guardar = function () {
        console.log("En mi función");
        console.log($scope.usuario);
    }

    $scope.miFuncion = function () {
        console.log("En mi función");

        var caja = document.querySelector("#foco")
        //var caja = document.getElementById("foco")
        //$("#foco")

        var cajaDos = angular.element(caja)

       // cajaDos.prop('placeholder', 'le dio click');

        
        cajaDos.val('le dimos click').css('color', 'blue');

        console.log(cajaDos);

        cajaDos.on("click", function () {
            alert("Click en la caja");
        });


    }


}