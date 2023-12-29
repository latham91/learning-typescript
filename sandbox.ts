// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'; // error
age = 30;

// isLoggedIn = 25; // error
isLoggedIn = true;

// arrays
let ninjas: string[] = [] // array of strings

// ninjas = [10, 23]; // error
ninjas = ['yoshi', 'mario']; // correct

// ninjas.push(23); // error
ninjas.push('luigi'); // correct


// union types
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = '123'; // correct
uid = 123; // correct
// uid = true; // error


// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // correct

// ninjaOne = 'hello'; // error

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: String
};