'use strict';

// function square(x) {
//     return x * x
// }

// console.log(square(8))

// const squareArrow = (x) => {
//     return x * x
// }

// console.log(squareArrow(8))
var fullName = 'Imie Nazwisko';

// const getFirstName = () => {
//     const firstName = fullName.split(' ')[0]
//     return firstName
// }

var getFirstName = function getFirstName() {
  return fullName.split(' ')[0];
};

var imie = getFirstName();

console.log(imie);
