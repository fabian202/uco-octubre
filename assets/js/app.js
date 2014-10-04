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
    
