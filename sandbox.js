var character = 'mario';
var age = 30;
var isBlackBelt = false;
// Typescript infers the type of the variable if it is not declared
// character = 20; // error
character = 'luigi'; // ok
// age = 'yoshi'; // error
age = 40; // ok
// isBlackBelt = 'yes'; // error
isBlackBelt = true; // ok
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ("hello"));
console.log(circ(7.5)); // ok
