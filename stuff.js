// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2})

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');

console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');

console.timeEnd('Hello');



/*
mult
line
comments
*/

// var, let, const

// var name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // variable can not start with a number
// var name = 'John';

// // Mult word vars
// var firstName = 'John'; // Camel Case

//LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//CONST means constant
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sarah';
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person)

const numbers = [1,2,3,4];
numbers.push(6);
console.log(numbers)

/* Primitive Data Types
String
Number
Boolean
Null
Undefined
Symbols (ES6)
*/

// PRIMITIVE

//String
const name = 'John Doe';



//Number
const age = 45;

//Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();

console.log(typeof address);

let val;

// Number to string
val = String(5);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4])

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = parseInt('100');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

// Type cohersion
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8,2);
val = Math.min(2,33,4,1,55,6,3);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);

console.log(val);