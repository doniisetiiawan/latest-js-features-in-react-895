// can declare a global variable
var name = 'Carlos Santana';

// cannot be a global
let age = 30;

console.log(window.name); // Carlos Santana
console.log(window.age); // undefined
