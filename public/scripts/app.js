'use strict';

// const add = function (a, b) {
//     console.log(arguments)
//     return a + b
// }
// console.log(add(55, 1, 1001))

var user = {
    name: 'Imie',
    cities: ['Gl', 'Krk', 'Wwa'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number + ' multibplied by 4 is ' + number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
