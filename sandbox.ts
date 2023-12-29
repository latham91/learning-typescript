let character = 'mario';
let age = 30;
let isBlackBelt = false;

// Typescript infers the type of the variable if it is not declared

// character = 20; // error
character = 'luigi'; // ok

// age = 'yoshi'; // error
age = 40; // ok

// isBlackBelt = 'yes'; // error
isBlackBelt = true; // ok

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

// console.log(circ("hello"));
console.log(circ(7.5)); // ok
