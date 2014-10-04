var app = angular.module('curso', ['ngRoute', 'curso.controllers', 'curso.services']);

app.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++)
            input.push(i);    
        return input;
    };
});

app.directive('whenScrolled', function () {
    return function (scope, elm, attr) {
        var raw = elm[0];

        console.log(elm);

        angular.element(elm).bind('scroll', function () {
            console.log(raw.scrollTop, raw.offsetHeight, raw.scrollHeight);
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});

app.directive("scroll", function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {
            console.log(this);
            console.log(this.pageYOffset);
            console.log(this.outerHeight);
            if (this.pageYOffset >= this.outerHeight) {
                element.addClass('min');
                console.log('llegamos al final');
            } else {
                element.removeClass('min');
                console.log('Header is in view.');
            }
        });
    };
});

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        }).
        when('/people', {
            templateUrl: 'templates/people.html',
            controller: 'PeopleCtrl'
        }).
        when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }]);










//angular.module('curso', [])
//    .directive('focusable', function () {
//        return {
//            compile: function (element, attrs) {
//                element.bin('focus', function () {
//                    element.addClass('focused');
//                    element.attr('placeholder', 'Haz click fuera de aqui')
//                });
//                element.bind('blur', function () {
//                    element.removeClass('focused');
//                    element.attr('placeholder', 'haz click aqui')
//                });
//            }
//        }
//    })

//.directive('Hola', function () {
//    return {
//        restrict: 'E',
//        template: '<button>Hola</button>',
//        replace: true,
//        compile: function (element) {
//            element.bin("click", function () {
//                alert("HOLA");
//            });
//        }
//    }
//});
    

angular.module('curso.controllers', [])

//.controller('HomeCtrl', function ($scope) {
//    $scope.hola = 'Ola k Ase';
//})

//.controller('PeopleCtrl', function ($scope, People) {
//    $scope.people = People.all();

//    $scope.save = function (persona) {
//        People.save(persona);
//    }
//})

//.controller('AboutCtrl', function ($scope) {
//    $scope.title = "About Us";
//    $scope.description = "We are the champions!!, ma frend";
//});

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
angular.module('curso.controllers')
.controller('AboutCtrl', function ($scope) {
    $scope.title = "About Us";
    $scope.description = "We are the champions!!, ma frend";
})
angular.module('curso.controllers')

.controller('HomeCtrl', function ($scope) {
    $scope.hola = 'Ola k Ase, k geniecito :)';
    console.log("oeeee");
    alert("Eso");
})
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
angular.module('curso.services', [])

.factory('People', function () {
    var people =  [
    { nombre: "Fabian", cedula: "3345345345", fecha: new Date(), sueldo: 80000000 },
    { nombre: "David", cedula: "34546", fecha: new Date(), sueldo: 577777777 },
    { nombre: "Julian", cedula: "57644", fecha: new Date(), sueldo: 888888888 },
    { nombre: "John", cedula: "867867", fecha: new Date(), sueldo: 444444444444 },
    { nombre: "Elsa", cedula: "12545454", fecha: new Date(), sueldo: 6666666666 }
    ];

    var cities = [
        { id: "1", nombre: "Medellin" },
        { id: "2", nombre: "Miami" },
        { id: "3", nombre: "Milan" },
        { id: "4", nombre: "Manchester" },
        { id: "5", nombre: "Rionegro" },
    ];

    function getData() {
        var data = [];

        for (var i = 0; i < 100; i++) {
            var objeto = { id: i, valor: 'Dato ' + i };
            data.push(objeto);
        }

        return data;
    }
    return {
        all: function () {
            return people;
        },
        byName: function (name) {
            return people.filter(function (row) {
                return row.nombre == name;
            });
        },
        save: function (persona) {
            people.unshift(persona);
            console.log(persona);
        },
        getCities: function () {
            return cities;
        },
        getData: getData
    }
});