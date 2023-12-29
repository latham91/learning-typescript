var age = 25;
age = true; // valid
console.log(age);
age = 'hello'; // valid
console.log(age);
age = { name: 'luigi' }; // valid
console.log(age);
var mixed = [];
mixed.push(5); // valid
mixed.push('mario'); // valid
mixed.push(false); // valid
console.log(mixed);
var ninja;
ninja = { name: 'yoshi', age: 25 }; // valid
console.log(ninja);
ninja = { name: 25, age: 'yoshi' }; // valid
console.log(ninja);
// Sort of reverts back to JavaScript
