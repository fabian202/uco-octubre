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