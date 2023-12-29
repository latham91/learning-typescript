// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi'; // error
age = 30;
// isLoggedIn = 25; // error
isLoggedIn = true;
// arrays
var ninjas = []; // array of strings
// ninjas = [10, 23]; // error
ninjas = ['yoshi', 'mario']; // correct
// ninjas.push(23); // error
ninjas.push('luigi'); // correct
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123'; // correct
uid = 123; // correct
// uid = true; // error
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // correct
// ninjaOne = 'hello'; // error
var ninjaTwo;
