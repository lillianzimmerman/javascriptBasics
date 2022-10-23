console.log(5 + 5); // Addition operator (+)
console.log(6 - 6); // Subtraction operator (-)
console.log(7 * 7); // Multiplication operator (*)
console.log(8 / 8); // Division operator (/)
console.log(2 ** 3); // Exponentiation operator (**)

// modulo operator (%)
console.log(10 % 5); // Result = 0 
console.log(10 % 4); // Result = 2
console.log(10 % 9); // Result = 1

/*
10 / 5 = 2 with a remainder of 0.
10 / 4 = 2 with a remainder of 2.
10 / 9 = 1 with a remainder of 1. 
*/

// Assignment operator '=' 
let x = 5;
let y = 2;
let z = 7;
console.log(x, y, z); // displays 5 2 7
x = y = z;
console.log(x, y, z); // displays 7 7 7

// Comparison operators

let numTwo = 2;
let two = "2";
console.log(numTwo == two) // returns true

let numTwo = 2;
let two = "2";
console.log(numTwo === two) // returns false numTwo = number, but two = string

let age = 28;
let strAge = "27";
console.log(age !== strAge) // returns true

let age = 27;
let strAge = "27";
console.log(age !== strAge) // returns true

let count = 2;
count = count + 1;
console.log(count);

let count = 2;
count += 1;
console.log(count);

