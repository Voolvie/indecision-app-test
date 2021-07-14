'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class Person {
//     constructor(name, age) {
//         this.name = name || 'test name'
//         this.age = age || 0
//     } 
//     getDescription() {
//         return `Hi i am ${this.name} i am ${this.age} years old`
//     }
// }
// class Student extends Person {
//     constructor(name, age, major){
//         super(name,age)
//         this.major = major
//     }
//     hasMajor() {
//         return !!this.major
//     }
//     getDescription() {
//         let description = super.getDescription()

//         if (this.hasMajor()) {
//             description += `Their major is ${this.major}`
//         } 

//         return description
//     }
// }
// const me = new Student('Pep', 23, "Physics")
// console.log(me.getDescription())
// const other = new Student()
// console.log(other.getDescription()) 

var Person = function () {
    function Person(name, surname) {
        _classCallCheck(this, Person);

        this.name = name || 'Anonymo';
        this.surname = surname || 'HEEHEE';
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hi i am ' + this.name + ' ' + this.surname;
        }
    }]);

    return Person;
}();

var Traveller = function (_Person) {
    _inherits(Traveller, _Person);

    function Traveller(name, surname, homeLocation) {
        _classCallCheck(this, Traveller);

        var _this = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, surname));

        _this.homeLocation = homeLocation;
        return _this;
    }

    _createClass(Traveller, [{
        key: 'hasHomeLocation',
        value: function hasHomeLocation() {
            return !!this.homeLocation;
        }
    }, {
        key: 'getGreeting',
        value: function getGreeting() {
            var description = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getGreeting', this).call(this);
            if (this.hasHomeLocation()) {
                description += ' i am from ' + this.homeLocation;
            }
            return description;
        }
    }]);

    return Traveller;
}(Person);

var me = new Traveller('Pep', 'Guardiola', 'London');
console.log(me.getGreeting());
var other = new Traveller('Pep', 'Guardiola');
console.log(other.getGreeting());
