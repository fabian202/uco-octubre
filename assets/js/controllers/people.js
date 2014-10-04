angular.module('curso.controllers')
.controller('PeopleCtrl', function ($scope, People) {
    $scope.people = People.all();

    $scope.cities = People.getCities();

    $scope.data = People.getData();
    $scope.dataFilter = [];

    $scope.paginacion = 10;
    $scope.paginaActual = 0;

    $scope.total = Math.ceil($scope.data.length / $scope.paginacion);    

    console.log($scope.total);

    $scope.cambiarPagina = function (pagina) {
        $scope.paginaActual = pagina;
        var inicio = $scope.paginaActual * $scope.paginacion;
        var fin = inicio + $scope.paginacion;
        $scope.dataFilter = $scope.data.slice(inicio,fin);
    }

    $scope.cambiarPagina(0);
    console.log($scope.dataFilter);

    $scope.save = function (persona) {
        People.save(persona);
    }
})