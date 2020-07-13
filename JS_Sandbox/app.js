// PRIMATIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test = undefined;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA',
};

let val;

// Number to string
val = String(5);
// Bool to a string
val = String(true);
// Date to a string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3, 4]);

val = parseInt('100.30');
val = parseFloat('100.30');

// output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

const num1 = 100;
const num2 = 50;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.max(2, 33, 4, 1, 55, 6, 3);
val = Math.min(2, 33, 4, 1, 55, 6, 3);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);
