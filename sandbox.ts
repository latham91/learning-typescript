let age: any = 25;

age = true; // valid
console.log(age);
age = 'hello'; // valid
console.log(age);
age = { name: 'luigi' }; // valid
console.log(age);

let mixed: any[] = [];
mixed.push(5); // valid
mixed.push('mario'); // valid
mixed.push(false); // valid
console.log(mixed);

let ninja: { name: any, age: any }; 
ninja = { name: 'yoshi', age: 25 }; // valid
console.log(ninja);

ninja = { name: 25, age: 'yoshi' }; // valid
console.log(ninja);

// Sort of reverts back to JavaScript