"use strict";
// Basic Types
let id = 5;
let company = 'Rieger Codes';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple ==> (data thats fixed in it's position)
let person = [1, 'Brad', true];
// Tuple Array ==> (an array of tuples)
let employee = [
    [1, 'Brad'],
    [2, 'Rick'],
    [3, 'Amy'],
];
// Union
let productId;
productId = 22;
productId = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// Objects
const user = {
    id: 1,
    name: 'Rick',
};
const user2 = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Using void with a function
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(2, 4));
// Classes
// implement interface with a class
// The properties are public by default (public, private, and protected)
// class Person implements PersonInterface {
//   private id: number;
//   name: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//   register() {
//     return `${this.name} is now registered!`;
//   }
// }
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const rick = new Person(1, 'Rick');
const brian = new Person(2, 'Brian');
// console.log(rick.id) <== this won't work bc it's private, can't change it as well.
console.log(rick, brian);
console.log(rick.register());
// Extend a class this is also called a SubClass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Chris', 'Developer');
console.log('subclass==>', emp.name, '+++', emp.register());
// Generics (used to build reusable components)
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Rick', 'Ben', 'Brooke']);
// strArray.push(1) <== this will throw an error!
strArray.push('Brittany');
